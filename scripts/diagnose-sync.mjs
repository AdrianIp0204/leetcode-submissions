#!/usr/bin/env node

import { existsSync } from "node:fs";
import { readFile, readdir } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import process from "node:process";

const root = process.cwd();

function readArg(name) {
  const prefix = `--${name}=`;
  const value = process.argv.find((arg) => arg.startsWith(prefix));
  if (value) return value.slice(prefix.length);
  const index = process.argv.indexOf(`--${name}`);
  return index === -1 ? undefined : process.argv[index + 1];
}

async function entriesIfPresent(directory) {
  try {
    return await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

async function hasSource(directory, recursive = false) {
  for (const entry of await entriesIfPresent(directory)) {
    const filename = path.join(directory, entry.name);
    if (entry.isFile() && /^solution\./.test(entry.name)) {
      if ((await readFile(filename, "utf8")).trim()) return true;
    }
    if (recursive && entry.isDirectory() && await hasSource(filename, true)) return true;
  }
  return false;
}

async function inspectLocalProblems() {
  const problems = [];
  for (const entry of await entriesIfPresent(path.join(root, "submissions"))) {
    if (!entry.isDirectory()) continue;
    const directory = path.join(root, "submissions", entry.name);
    problems.push({
      slug: entry.name.replace(/^\d+-/, ""),
      hasSource: await hasSource(directory) || await hasSource(path.join(directory, "accepted"), true),
    });
  }
  return problems;
}

function isBundleFilename(name) {
  return /\.json(?:\.dropboxignore)?$/i.test(name)
    || /^(?:\d+-)?leetcode-exports-.+\.txt(?:\.dropboxignore)?$/i.test(name);
}

function acceptedSourceSlug(payload) {
  if (!payload || !/^accepted$/i.test(String(payload.status || "").trim())) return "";
  if (typeof payload.code !== "string" || !payload.code.trim()) return "";
  // Match only paths that the watcher can import, without printing submitted code.
  const exportPath = String(payload.path || "").replace(/\\/g, "/");
  const normalized = path.posix.normalize(exportPath);
  if (path.posix.isAbsolute(normalized) || normalized.startsWith("..")) return "";
  const match = normalized.match(/^submissions\/([^/]+)\/(?:accepted\/[^/]+\/)?solution\.[^/]+$/);
  return match ? match[1].replace(/^\d+-/, "") : "";
}

async function inspectBundles(inbox) {
  const queued = new Map();
  const processed = new Map();
  let bundleCount = 0;
  let incompleteCount = 0;
  let invalidCount = 0;

  async function inspect(directory, sourceMap) {
    for (const entry of await entriesIfPresent(directory)) {
      if (!entry.isFile()) continue;
      if (/\.(?:crdownload|tmp)$/i.test(entry.name)) {
        incompleteCount += 1;
        continue;
      }
      if (!isBundleFilename(entry.name)) continue;
      let bundle;
      try {
        bundle = JSON.parse(await readFile(path.join(directory, entry.name), "utf8"));
      } catch {
        // JSON parser errors can contain a source-code excerpt; do not echo them.
        invalidCount += 1;
        console.log(`Unreadable or invalid JSON handoff: ${path.join(directory, entry.name)}`);
        continue;
      }
      if (bundle?.schema !== "leetcode-submissions.export-bundle.v1" || !Array.isArray(bundle.exports)) {
        invalidCount += 1;
        console.log(`Unsupported handoff schema: ${path.join(directory, entry.name)}`);
        continue;
      }
      bundleCount += 1;
      for (const payload of bundle.exports) {
        const slug = acceptedSourceSlug(payload);
        if (slug) sourceMap.set(slug, (sourceMap.get(slug) || 0) + 1);
      }
    }
  }

  for (const name of ["queue", "_queue", ".queue"]) {
    const directory = path.join(inbox, name);
    await inspect(directory, queued);
    await inspect(path.join(directory, "processed"), processed);
  }
  return { queued, processed, bundleCount, incompleteCount, invalidCount };
}

async function main() {
  if (!existsSync(path.join(root, "scripts", "auto-sync.mjs"))) {
    throw new Error("Run sync:diagnose from the leetcode-submissions repo root.");
  }
  const inbox = path.resolve(readArg("inbox") || path.join(os.homedir(), "Downloads", "leetcode-submissions"));
  console.log(`Read-only sync diagnosis; repo ${root}`);
  console.log(`Handoff inbox: ${inbox} (${existsSync(inbox) ? "present" : "not found"})`);
  const bundles = await inspectBundles(inbox);
  console.log(`Handoff bundles: ${bundles.bundleCount}; incomplete downloads: ${bundles.incompleteCount}; invalid bundles: ${bundles.invalidCount}.`);

  const profilePath = path.join(root, "profile", "leetcode-public.json");
  if (!existsSync(profilePath)) {
    console.log("No public snapshot; run npm run fetch:public, then rerun this diagnosis.");
    return;
  }
  const snapshot = JSON.parse(await readFile(profilePath, "utf8"));
  const problems = await inspectLocalProblems();
  const localSourceSlugs = new Set(problems.filter((problem) => problem.hasSource).map((problem) => problem.slug));
  const publicSolved = snapshot.solvedByDifficulty?.find((item) => item.difficulty === "All")?.count;
  console.log(`Public snapshot: ${snapshot.fetchedAt || "unknown date"}; recent metadata cannot supply submitted source code.`);
  if (typeof publicSolved === "number") {
    console.log(`Estimated archive gap: ${Math.max(0, publicSolved - problems.length)} (public solved ${publicSolved}, local folders ${problems.length}); folder counts are not proof of accepted source.`);
  }

  const recent = new Map();
  for (const submission of snapshot.recentAccepted || []) {
    if (submission.titleSlug && !recent.has(submission.titleSlug)) recent.set(submission.titleSlug, submission);
  }
  const missing = [...recent.values()].filter((submission) => !localSourceSlugs.has(submission.titleSlug));
  console.log(`Recent public acceptances missing local source: ${missing.length}. This is not a complete solved inventory.`);
  for (const submission of missing) {
    const queued = bundles.queued.get(submission.titleSlug) || 0;
    const processed = bundles.processed.get(submission.titleSlug) || 0;
    console.log(`- ${submission.title || submission.titleSlug} (${submission.titleSlug}); accepted ${submission.acceptedAt || submission.timestamp || "unknown date"}; queued source ${queued}, processed source ${processed}.`);
    if (queued) {
      console.log("  Source is in a queued handoff. Run the watcher from this repo with the same --inbox and check its import/commit output.");
    } else if (processed) {
      console.log("  A processed handoff contains source but this repo lacks it. Check the watcher repo path/logs, then use Hand Off Queue To Sync again.");
    } else {
      console.log("  Source unavailable in inspected local state. On the solving computer, reload the extension and LeetCode tab, use Collect Submission History while logged in, then Hand Off Queue To Sync.");
    }
  }
  if (missing.length || bundles.incompleteCount || bundles.invalidCount) {
    console.log("Compare the extension popup's completed handoff filename with this inbox; custom browser download locations need a matching --inbox.");
    console.log("The watcher imports only queue, _queue, and .queue bundles. Check download completion and watcher logs; public fetches cannot backfill code.");
    console.log("Imports commit locally by default; publication requires an explicit git push or a watcher started with --push.");
  }
  console.log("Browser extension storage and desktop watcher logs are not inspected by this command. No files, bundles, commits, or pushes were changed.");
}

main().catch((error) => {
  console.error(error.message || String(error));
  process.exit(1);
});
