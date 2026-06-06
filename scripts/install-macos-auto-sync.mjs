#!/usr/bin/env node

import { mkdir, writeFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import os from "node:os";
import path from "node:path";
import process from "node:process";

const root = path.resolve(path.join(path.dirname(new URL(import.meta.url).pathname), ".."));
const label = "com.adrian.leetcode-submissions-auto-sync";
const launchAgentsDir = path.join(os.homedir(), "Library", "LaunchAgents");
const logsDir = path.join(os.homedir(), "Library", "Logs");
const plistPath = path.join(launchAgentsDir, `${label}.plist`);
const scriptPath = path.join(root, "scripts", "auto-sync.mjs");
const uid = process.getuid?.();

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

function xmlEscape(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: root,
    encoding: "utf8",
    stdio: options.capture ? "pipe" : "inherit",
  });
  if (result.status !== 0 && !options.allowFailure) {
    throw new Error(`${command} ${args.join(" ")} failed with status ${result.status}`);
  }
  return result;
}

function plistArray(items) {
  return ["<array>", ...items.map((item) => `  <string>${xmlEscape(item)}</string>`), "</array>"].join(
    "\n",
  );
}

function renderPlist({ intervalMs, push }) {
  const args = [process.execPath, scriptPath, `--interval=${intervalMs}`];
  if (push) args.push("--push");

  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>${xmlEscape(label)}</string>
  <key>ProgramArguments</key>
  ${plistArray(args)}
  <key>WorkingDirectory</key>
  <string>${xmlEscape(root)}</string>
  <key>RunAtLoad</key>
  <true/>
  <key>KeepAlive</key>
  <true/>
  <key>StandardOutPath</key>
  <string>${xmlEscape(path.join(logsDir, "LeetCodeSubmissionsAutoSync.log"))}</string>
  <key>StandardErrorPath</key>
  <string>${xmlEscape(path.join(logsDir, "LeetCodeSubmissionsAutoSync.err.log"))}</string>
  <key>EnvironmentVariables</key>
  <dict>
    <key>PATH</key>
    <string>${xmlEscape(process.env.PATH || "/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin")}</string>
  </dict>
</dict>
</plist>
`;
}

async function main() {
  if (process.platform !== "darwin") {
    throw new Error("This installer is only for macOS. Use install-windows-auto-sync.ps1 on Windows.");
  }
  if (typeof uid !== "number") throw new Error("Could not determine current macOS uid.");

  const intervalSeconds = Math.max(30, Number(readArg("interval-seconds") || 30));
  const intervalMs = intervalSeconds * 1000;
  const push = !hasFlag("no-push");

  await mkdir(launchAgentsDir, { recursive: true });
  await mkdir(logsDir, { recursive: true });
  await writeFile(plistPath, renderPlist({ intervalMs, push }), "utf8");

  const domain = `gui/${uid}`;
  run("launchctl", ["bootout", domain, plistPath], { allowFailure: true });
  run("launchctl", ["bootstrap", domain, plistPath]);
  run("launchctl", ["kickstart", "-k", `${domain}/${label}`], { allowFailure: true });

  console.log(`Installed and started LaunchAgent: ${plistPath}`);
  console.log(`Repo: ${root}`);
  console.log(`Interval: ${intervalSeconds} seconds`);
  console.log(`Push: ${push}`);
  console.log(`Log: ${path.join(logsDir, "LeetCodeSubmissionsAutoSync.log")}`);
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
