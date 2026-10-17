#!/usr/bin/env node

import { existsSync } from "node:fs";
import { copyFile, mkdir, readFile, readdir, rename, rm, stat, writeFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import os from "node:os";
import path from "node:path";
import process from "node:process";
import { contentRoot, gitWorkspace, gitPaths, isManagedContentPath, assertSafeContentPath, assertNoCredentials, assertSafeChangedFiles } from "./workspace.mjs";
import { createGuardedPush } from "./guarded-push.mjs";

const root = contentRoot;
const { gitRoot, gitDir, prefix } = gitWorkspace();
const syncLockDir = path.join(gitDir, "leetcode-auto-sync.lock");
const staleLockMs = 10 * 60 * 1000;

function hasFlag(name) {
  return process.argv.includes(`--${name}`);
}

function readArg(name) {
  const prefix = `--${name}=`;
  const value = process.argv.find((arg) => arg.startsWith(prefix));
  if (value) return value.slice(prefix.length);
  const index = process.argv.indexOf(`--${name}`);
  if (index !== -1) return process.argv[index + 1];
  return undefined;
}

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: gitRoot,
    stdio: options.capture ? "pipe" : "inherit",
    encoding: "utf8",
  });
  if (result.status !== 0 && !options.allowFailure) {
    throw new Error(`${command} ${args.join(" ")} failed with status ${result.status}`);
  }
  return result;
}

function gitOutput(args) {
  return run("git", args, { capture: true }).stdout;
}

async function acquireSyncLock() {
  try {
    await mkdir(syncLockDir);
    await writeFile(
      path.join(syncLockDir, "owner.txt"),
      `pid=${process.pid}\ncreatedAt=${new Date().toISOString()}\n`,
      "utf8",
    );
    return true;
  } catch (error) {
    if (error.code !== "EEXIST") throw error;

    try {
      const info = await stat(syncLockDir);
      if (Date.now() - info.mtimeMs > staleLockMs) {
        await rm(syncLockDir, { recursive: true, force: true });
        return acquireSyncLock();
      }
    } catch {
      return false;
    }

    return false;
  }
}

async function releaseSyncLock() {
  await rm(syncLockDir, { recursive: true, force: true });
}

function gitBusyReason() {
  const busyPaths = [
    "index.lock",
    "HEAD.lock",
    "MERGE_HEAD",
    "CHERRY_PICK_HEAD",
    "REVERT_HEAD",
    "rebase-apply",
    "rebase-merge",
  ].filter((relativePath) => existsSync(path.join(gitDir, relativePath)));

  if (!busyPaths.length) return "";
  return busyPaths.join(", ");
}

function normalizeGitPath(value) {
  return String(value || "").replace(/\\/g, "/").replace(/^\.\/+/, "");
}

function isSyncManagedPath(value) {
  const normalized = normalizeGitPath(value);
  return normalized.startsWith(prefix) && isManagedContentPath(normalized.slice(prefix.length));
}

function splitGitLines(value) {
  return gitPaths(value);
}

function gitChangedPaths() {
  const changed = [
    ...splitGitLines(gitOutput(["diff", "--name-only", "-z"])),
    ...splitGitLines(gitOutput(["diff", "--cached", "--name-only", "-z"])),
    ...splitGitLines(gitOutput(["ls-files", "--others", "--exclude-standard", "-z"])),
  ].map(normalizeGitPath);

  return [...new Set(changed)];
}

function gitStagedPaths() {
  return splitGitLines(gitOutput(["diff", "--cached", "--name-only", "-z"])).map(normalizeGitPath);
}

function ensureRepoRoot() {
  const result = run("git", ["rev-parse", "--show-toplevel"], {
    capture: true,
    allowFailure: true,
  });
  if (result.status !== 0) {
    throw new Error("Run auto-sync from a cloned leetcode-submissions git repo root.");
  }

  const expectedFiles = [
    path.join(root, "extension", "leetcode-exporter", "manifest.json"),
    path.join(root, "scripts", "auto-sync.mjs"),
    path.join(root, "submissions", "README.md"),
  ];
  if (!expectedFiles.every((file) => existsSync(file))) {
    throw new Error("This does not look like the leetcode-submissions repo root.");
  }
}

async function copyTree(sourceRoot, targetRoot) {
  if (!existsSync(sourceRoot)) return 0;
  let copied = 0;

  async function walk(sourceDir, relativeDir = "") {
    const entries = await readdir(sourceDir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.name.endsWith(".crdownload") || entry.name.endsWith(".tmp")) continue;

      const sourcePath = path.join(sourceDir, entry.name);
      const relativePath = path.join(relativeDir, entry.name);
      const targetPath = path.join(targetRoot, relativePath);
      const normalizedRelativePath = relativePath.replace(/\\/g, "/");

      if (entry.isDirectory()) {
        if (["queue", "_queue", ".queue", "processed"].includes(entry.name)) continue;
        await walk(sourcePath, relativePath);
        continue;
      }

      if (!entry.isFile()) continue;
      if (entry.name.endsWith(".dropboxignore")) continue;
      if (!isManagedContentPath(normalizedRelativePath)) continue;
      assertSafeContentPath(normalizedRelativePath);
      assertNoCredentials(await readFile(sourcePath, "utf8"));

      await mkdir(path.dirname(targetPath), { recursive: true });
      await copyFile(sourcePath, targetPath);
      copied += 1;
    }
  }

  await walk(sourceRoot);
  return copied;
}

function safeRepoPath(relativePath) {
  return assertSafeContentPath(relativePath);
}

function validateExport(inputPayload) {
  const payload = normalizeExportPayload(inputPayload);
  if (!payload.path || !payload.code) return;
  if (!/^submissions\//.test(payload.path)) throw new Error("Bundle exports must target LeetCode submissions.");
  safeRepoPath(payload.path);
  assertNoCredentials(payload.code);
  if (payload.readmePath && payload.readme) {
    safeRepoPath(payload.readmePath);
    if (path.posix.dirname(payload.readmePath) !== path.posix.dirname(payload.path) || path.posix.basename(payload.readmePath) !== "README.md") {
      throw new Error("Export README must accompany its solution.");
    }
    assertNoCredentials(payload.readme);
  }
}

function canonicalSolutionCode(value) {
  return `${String(value || "")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .replace(/\s+$/u, "")}\n`;
}

function hashString(value) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
}

function sanitizePathSegment(value) {
  return String(value || "")
    .replace(/[:.]/g, "-")
    .replace(/[^a-zA-Z0-9_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function isAcceptedStatus(value) {
  return /^accepted$/i.test(String(value || "").trim());
}

function archiveSubmissionKey(payload) {
  const identity =
    payload.submissionId ||
    payload.submittedAt ||
    payload.exportedAt ||
    `code-${hashString(payload.code || payload.path || "unknown")}`;
  return `${sanitizePathSegment(`submission-${identity}`)}-accepted`;
}

function acceptedArchivePath(payload) {
  if (!isAcceptedStatus(payload.status)) return "";

  const solutionPath = normalizeGitPath(payload.path);
  if (!solutionPath || /\/(?:accepted|attempts)\//.test(solutionPath)) return "";
  if (!/^submissions\/[^/]+\/solution\.[^/]+$/.test(solutionPath)) return "";

  const problemDir = path.posix.dirname(solutionPath);
  const filename = path.posix.basename(solutionPath);
  return `${problemDir}/accepted/${archiveSubmissionKey(payload)}/${filename}`;
}

function normalizeExportPayload(payload) {
  const archivePath = acceptedArchivePath(payload);
  if (!archivePath) return payload;

  return {
    ...payload,
    path: archivePath,
    readmePath: `${path.posix.dirname(archivePath)}/README.md`,
  };
}

async function writeExport(inputPayload) {
  const payload = normalizeExportPayload(inputPayload);
  if (!payload.path || !payload.code) return { files: 0, skippedDuplicates: 0 };

  const solutionPath = safeRepoPath(payload.path);
  const nextCode = canonicalSolutionCode(payload.code);
  if (existsSync(solutionPath)) {
    const currentCode = canonicalSolutionCode(await readFile(solutionPath, "utf8"));
    if (currentCode === nextCode) {
      return { files: 0, skippedDuplicates: 1 };
    }
  }

  await mkdir(path.dirname(solutionPath), { recursive: true });
  await writeFile(solutionPath, nextCode, "utf8");

  let written = 1;
  if (payload.readmePath && payload.readme) {
    const readmePath = safeRepoPath(payload.readmePath);
    await mkdir(path.dirname(readmePath), { recursive: true });
    await writeFile(readmePath, payload.readme, "utf8");
    written += 1;
  }

  return { files: written, skippedDuplicates: 0 };
}

async function archiveBundle(bundlePath) {
  const processedDir = path.join(path.dirname(bundlePath), "processed");
  await mkdir(processedDir, { recursive: true });
  await rename(bundlePath, path.join(processedDir, `${Date.now()}-${path.basename(bundlePath)}`));
}

function isExportBundleFile(name) {
  return /\.json(?:\.dropboxignore)?$/i.test(name) || /^leetcode-exports-.+\.txt(?:\.dropboxignore)?$/i.test(name);
}

async function importExportBundles(inbox) {
  const queueDirs = ["queue", "_queue", ".queue"].map((name) => path.join(inbox, name));
  let bundles = 0;
  let exports = 0;
  let files = 0;
  let skippedDuplicates = 0;

  for (const queueDir of queueDirs) {
    if (!existsSync(queueDir)) continue;

    const entries = await readdir(queueDir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isFile() || !isExportBundleFile(entry.name)) continue;

      const bundlePath = path.join(queueDir, entry.name);
      let bundle;
      try {
        bundle = JSON.parse(await readFile(bundlePath, "utf8"));
      } catch {
        throw new Error("Could not read a handoff bundle as JSON; bundle retained and contents were not logged.");
      }
      if (bundle.schema !== "leetcode-submissions.export-bundle.v1" || !Array.isArray(bundle.exports)) {
        continue;
      }

      for (const payload of bundle.exports) validateExport(payload);
      for (const payload of bundle.exports) {
        const result = await writeExport(payload);
        files += result.files;
        skippedDuplicates += result.skippedDuplicates;
      }

      exports += bundle.exports.length;
      bundles += 1;
      await archiveBundle(bundlePath);
    }
  }

  return { bundles, exports, files, skippedDuplicates };
}

async function syncOnce({ inbox, push }) {
  if (!(await acquireSyncLock())) {
    console.log("Another auto-sync run is active; skipped this interval.");
    return;
  }

  try {
    const busyBeforeImport = gitBusyReason();
    if (busyBeforeImport) {
      console.log(`Git is busy (${busyBeforeImport}); skipped this interval.`);
      return;
    }

    const startingHead = push ? push.assertReady() : undefined;

    const imported = await importExportBundles(inbox);
    const copied = await copyTree(inbox, root);
    const busyBeforeCommit = gitBusyReason();
    if (busyBeforeCommit) {
      console.log(`Git became busy (${busyBeforeCommit}); leaving files uncommitted for next interval.`);
      return;
    }

    const changedPaths = gitChangedPaths();

    if (!changedPaths.length) {
      if (imported.bundles > 0 || copied > 0) {
        console.log(
          `Imported ${imported.exports} bundled exports, skipped ${imported.skippedDuplicates} duplicate exports, and copied ${copied} legacy files; no git changes.`,
        );
      } else {
        console.log("No downloaded files or git changes.");
      }
      if (push) push.pushPending();
      return;
    }

    const syncManagedPaths = changedPaths.filter(isSyncManagedPath);
    const unmanagedPaths = changedPaths.filter((filePath) => !isSyncManagedPath(filePath));

    if (unmanagedPaths.length) {
      console.log(
        `Leaving ${unmanagedPaths.length} non-sync repo changes alone: ${unmanagedPaths
          .slice(0, 5)
          .join(", ")}${unmanagedPaths.length > 5 ? ", ..." : ""}`,
      );
    }

    if (!syncManagedPaths.length) {
      console.log("No sync-managed file changes to commit.");
      if (push) push.pushPending();
      return;
    }

    const unmanagedStaged = gitStagedPaths().filter((filePath) => !isSyncManagedPath(filePath));
    if (unmanagedStaged.length) {
      console.log(
        `Unrelated staged changes are present (${unmanagedStaged.join(", ")}); leaving sync files uncommitted for the next interval.`,
      );
      if (push) push.pushPending();
      return;
    }

    if (push) push.assertReady({ expectedHead: startingHead });
    assertSafeChangedFiles(gitRoot, syncManagedPaths, prefix);
    run("git", ["--literal-pathspecs", "add", "--", ...syncManagedPaths]);
    const staged = gitStagedPaths().filter(isSyncManagedPath);
    if (!staged.length) {
      console.log("No staged changes after applying .gitignore.");
      if (push) push.pushPending();
      return;
    }

    if (push) push.assertReady({ expectedHead: startingHead });
    const stamp = new Date().toISOString().replace(/:\d{2}\.\d{3}Z$/, "Z");
    run("git", ["--literal-pathspecs", "commit", "--only", "-m", `Auto-sync LeetCode submissions ${stamp}`, "--", ...staged]);

    if (push) push.pushPending();
    else console.log("Committed locally. Push skipped; start with --push to publish automatically.");
  } finally {
    await releaseSyncLock();
  }
}

async function main() {
  ensureRepoRoot();

  const inbox = path.resolve(readArg("inbox") || path.join(os.homedir(), "Downloads", "leetcode-submissions"));
  const intervalMs = Math.max(30_000, Number(readArg("interval") || 300_000));
  const pushEnabled = hasFlag("push") || process.env.LEETCODE_SYNC_PUSH === "1";
  const push = pushEnabled ? createGuardedPush({
    gitRoot,
    prefix,
    repository: process.env.LEETCODE_SYNC_PUSH_REPOSITORY ?? "AdrianIp0204/leetcode-submissions",
    branch: process.env.LEETCODE_SYNC_PUSH_BRANCH ?? "main",
  }) : null;

  console.log(`Watching ${inbox}`);
  console.log(`Repo ${root}`);
  console.log(`Git root ${gitRoot}`);
  console.log(push ? "Auto-push enabled." : "Auto-push disabled.");

  if (hasFlag("once")) {
    await syncOnce({ inbox, push });
    return;
  }

  if (push) {
    await syncOnce({ inbox, push }).catch((error) => {
      console.error(error.stack || error.message);
    });
  } else {
    await syncOnce({ inbox, push });
  }

  setInterval(() => {
    syncOnce({ inbox, push }).catch((error) => {
      console.error(error.stack || error.message);
    });
  }, intervalMs);
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
