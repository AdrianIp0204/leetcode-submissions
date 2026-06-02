#!/usr/bin/env node

import { existsSync } from "node:fs";
import { copyFile, mkdir, readdir } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import os from "node:os";
import path from "node:path";
import process from "node:process";

const root = process.cwd();

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

      if (entry.isDirectory()) {
        await walk(sourcePath, relativePath);
        continue;
      }

      if (!entry.isFile()) continue;
      await mkdir(path.dirname(targetPath), { recursive: true });
      await copyFile(sourcePath, targetPath);
      copied += 1;
    }
  }

  await walk(sourceRoot);
  return copied;
}

async function syncOnce({ inbox, push }) {
  const copied = await copyTree(inbox, root);
  const statusBeforeAdd = gitOutput(["status", "--porcelain"]);

  if (!statusBeforeAdd) {
    if (copied > 0) console.log(`Copied ${copied} downloaded files; no git changes.`);
    else console.log("No downloaded files or git changes.");
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
