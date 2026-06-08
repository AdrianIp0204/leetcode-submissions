#!/usr/bin/env node

import { access, readFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const extensionDir = path.join(root, "extension", "leetcode-exporter");
const manifestPath = path.join(extensionDir, "manifest.json");

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: root,
    encoding: "utf8",
    stdio: "pipe",
  });

  if (result.status !== 0) {
    process.stderr.write(result.stdout);
    process.stderr.write(result.stderr);
    throw new Error(`${command} ${args.join(" ")} failed`);
  }
}

async function main() {
  const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
  if (manifest.manifest_version !== 3) throw new Error("Expected manifest v3.");
  if (!manifest.host_permissions?.includes("https://leetcode.com/*")) {
    throw new Error("Missing LeetCode host permission.");
  }
  if (manifest.version !== "0.4.4") throw new Error("Expected extension version 0.4.4.");

  const requiredFiles = [
    "background.js",
    "content.js",
    "page-bridge.js",
    "popup.html",
    "popup.css",
    "popup.js",
    "README.md",
  ];

  for (const file of requiredFiles) {
    await access(path.join(extensionDir, file));
  }

  for (const file of ["background.js", "content.js", "page-bridge.js", "popup.js"]) {
    run("node", ["--check", path.join(extensionDir, file)]);
  }

  const content = await readFile(path.join(extensionDir, "content.js"), "utf8");
  if (!content.includes("fallbackAutoSignal") || !content.includes("problem-poll:")) {
    throw new Error("Auto-capture must poll LeetCode history when visible result status is absent.");
  }
  if (!content.includes("collectAutoPayloadForSignal")) {
    throw new Error("Auto-capture must route fallback signals through history collection.");
  }

  const background = await readFile(path.join(extensionDir, "background.js"), "utf8");
  if (!background.includes("waitForDownloadComplete") || !background.includes("state === \"complete\"")) {
    throw new Error("Handoff must wait for Chrome to complete the download before marking exports handed off.");
  }

  console.log("Extension manifest and JavaScript checks passed.");
}

main().catch((error) => {
  console.error(error.message || String(error));
  process.exit(1);
});
