#!/usr/bin/env node

import { existsSync } from "node:fs";
import { copyFile, mkdir, readFile, readdir, rename, rm, stat, writeFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import os from "node:os";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const syncLockDir = path.join(root, ".git", "leetcode-auto-sync.lock");
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
    cwd: root,
    stdio: options.capture ? "pipe" : "inherit",
    encoding: "utf8",
  });
  if (result.status !== 0 && !options.allowFailure) {
    throw new Error(`${command} ${args.join(" ")} failed with status ${result.status}`);
  }
  return result;
}

function gitOutput(args) {
  return run("git", args, { capture: true }).stdout.trim();
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
  const gitDir = path.join(root, ".git");
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

function ensureRepoRoot() {
  const result = run("git", ["rev-parse", "--show-toplevel"], {
    capture: true,
    allowFailure: true,
  });
  if (result.status !== 0) {
    throw new Error("Run auto-sync from a cloned leetcode-submissions git repo root.");
  }

  const gitRoot = path.resolve(result.stdout.trim());
  if (gitRoot !== path.resolve(root)) {
    throw new Error(`Run auto-sync from the repo root, not ${root}`);
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
      if (!/^(submissions|notes|profile)\//.test(normalizedRelativePath)) continue;

      await mkdir(path.dirname(targetPath), { recursive: true });
      await copyFile(sourcePath, targetPath);
      copied += 1;
    }
  }

  await walk(sourceRoot);
  return copied;
}

function safeRepoPath(relativePath) {
  const normalized = path.normalize(String(relativePath || "").replace(/\\/g, "/"));
  if (!normalized || normalized.startsWith("..") || path.isAbsolute(normalized)) {
    throw new Error(`Unsafe export path: ${relativePath}`);
  }

  const targetPath = path.resolve(root, normalized);
  const rootPath = path.resolve(root);
  if (targetPath !== rootPath && !targetPath.startsWith(`${rootPath}${path.sep}`)) {
    throw new Error(`Export path escapes repo: ${relativePath}`);
  }

  return targetPath;
}

async function writeExport(payload) {
  if (!/^accepted$/i.test(String(payload.status || ""))) return 0;
  if (!payload.path || !payload.code) return 0;

  const solutionPath = safeRepoPath(payload.path);
  await mkdir(path.dirname(solutionPath), { recursive: true });
  await writeFile(solutionPath, `${payload.code.replace(/\s+$/u, "")}\n`, "utf8");

  let written = 1;
  if (payload.readmePath && payload.readme) {
    const readmePath = safeRepoPath(payload.readmePath);
    await mkdir(path.dirname(readmePath), { recursive: true });
    await writeFile(readmePath, payload.readme, "utf8");
    written += 1;
  }

  return written;
}

async function archiveBundle(bundlePath) {
  const processedDir = path.join(path.dirname(bundlePath), "processed");
  await mkdir(processedDir, { recursive: true });
  await rename(bundlePath, path.join(processedDir, `${Date.now()}-${path.basename(bundlePath)}`));
}

function isExportBundleFile(name) {
  return /\.json(?:\.dropboxignore)?$/i.test(name);
}

async function importExportBundles(inbox) {
  const queueDirs = ["queue", "_queue", ".queue"].map((name) => path.join(inbox, name));
  let bundles = 0;
  let exports = 0;
  let files = 0;

  for (const queueDir of queueDirs) {
    if (!existsSync(queueDir)) continue;

    const entries = await readdir(queueDir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isFile() || !isExportBundleFile(entry.name)) continue;

      const bundlePath = path.join(queueDir, entry.name);
      const bundle = JSON.parse(await readFile(bundlePath, "utf8"));
      if (bundle.schema !== "leetcode-submissions.export-bundle.v1" || !Array.isArray(bundle.exports)) {
        continue;
      }

      for (const payload of bundle.exports) {
        files += await writeExport(payload);
      }

      exports += bundle.exports.length;
      bundles += 1;
      await archiveBundle(bundlePath);
    }
  }

  return { bundles, exports, files };
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

    const imported = await importExportBundles(inbox);
    const copied = await copyTree(inbox, root);
    const busyBeforeCommit = gitBusyReason();
    if (busyBeforeCommit) {
      console.log(`Git became busy (${busyBeforeCommit}); leaving files uncommitted for next interval.`);
      return;
    }

    const statusBeforeAdd = gitOutput(["status", "--porcelain"]);

    if (!statusBeforeAdd) {
      if (imported.bundles > 0 || copied > 0) {
        console.log(
          `Imported ${imported.exports} bundled exports and copied ${copied} legacy files; no git changes.`,
        );
      } else {
        console.log("No downloaded files or git changes.");
      }
      return;
    }

    run("git", ["add", "."]);
    const staged = gitOutput(["diff", "--cached", "--name-only"]);
    if (!staged) {
      console.log("No staged changes after applying .gitignore.");
      return;
    }

    const stamp = new Date().toISOString().replace(/:\d{2}\.\d{3}Z$/, "Z");
    run("git", ["commit", "-m", `Auto-sync LeetCode submissions ${stamp}`]);

    if (push) run("git", ["push"]);
    else console.log("Committed locally. Push skipped; start with --push to publish automatically.");
  } finally {
    await releaseSyncLock();
  }
}

async function main() {
  ensureRepoRoot();

  const inbox = path.resolve(readArg("inbox") || path.join(os.homedir(), "Downloads", "leetcode-submissions"));
  const intervalMs = Math.max(30_000, Number(readArg("interval") || 300_000));
  const push = hasFlag("push") || process.env.LEETCODE_SYNC_PUSH === "1";

  console.log(`Watching ${inbox}`);
  console.log(`Repo ${root}`);
  console.log(push ? "Auto-push enabled." : "Auto-push disabled.");

  await syncOnce({ inbox, push });
  if (hasFlag("once")) return;

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
