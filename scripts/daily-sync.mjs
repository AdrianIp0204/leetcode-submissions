#!/usr/bin/env node

import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const defaultConfigPath = path.join(root, ".leetcode-sync.json");
const trackedConfigPath = path.join(root, "config", "leetcode-sync.json");

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

async function readConfig() {
  const configPath = readArg("config") || (existsSync(defaultConfigPath) ? defaultConfigPath : trackedConfigPath);
  if (!existsSync(configPath)) return {};
  return JSON.parse(await readFile(configPath, "utf8"));
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

async function main() {
  const config = await readConfig();
  const username = readArg("username") || process.env.LEETCODE_USERNAME || config.leetcodeUsername;
  const shouldFetch = !hasFlag("no-fetch") && Boolean(username);
  const shouldPush = hasFlag("push") || process.env.LEETCODE_SYNC_PUSH === "1" || config.push === true;

  if (shouldFetch) {
    run("node", ["scripts/fetch-public-profile.mjs", "--username", username, "--limit", String(config.recentLimit || 20)]);
  } else if (!hasFlag("no-fetch")) {
    console.log("No LeetCode username configured; skipping public profile fetch.");
  }

  const statusBeforeAdd = gitOutput(["status", "--porcelain"]);
  if (!statusBeforeAdd) {
    console.log("No local changes to commit.");
    return;
  }

  run("git", ["add", "."]);
  const staged = gitOutput(["diff", "--cached", "--name-only"]);
  if (!staged) {
    console.log("No staged changes after applying .gitignore.");
    return;
  }

  const date = new Date().toISOString().slice(0, 10);
  run("git", ["commit", "-m", `Sync LeetCode submissions ${date}`]);

  if (shouldPush) {
    run("git", ["push"]);
  } else {
    console.log("Committed locally. Push skipped; use --push after you approve remote daily sync.");
  }
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
