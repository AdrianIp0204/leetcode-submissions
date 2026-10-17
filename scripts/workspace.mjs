import { spawnSync } from "node:child_process";
import { existsSync, lstatSync, readFileSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const contentRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

export function gitWorkspace() {
  const query = (args) => {
    const result = spawnSync("git", args, { cwd: contentRoot, encoding: "utf8" });
    if (result.status !== 0) throw new Error("LeetCode tooling requires a Git checkout.");
    return result.stdout.trim();
  };
  const gitRoot = path.resolve(query(["rev-parse", "--show-toplevel"]));
  const gitDir = path.resolve(query(["rev-parse", "--absolute-git-dir"]));
  const prefix = path.relative(gitRoot, contentRoot).replace(/\\/g, "/");
  if (prefix.startsWith("../") || path.isAbsolute(prefix)) throw new Error("LeetCode root escapes Git checkout.");
  return { gitRoot, gitDir, prefix: prefix ? `${prefix}/` : "" };
}

export function gitPaths(value) {
  return String(value || "").split("\0").filter(Boolean);
}

export function isManagedContentPath(value, { reports = false } = {}) {
  const normalized = String(value || "").replace(/\\/g, "/");
  if (normalized.split("/").some((part) => !part || part === "." || part === ".." || part.startsWith("."))) return false;
  if (/(?:^|\/)(?:node_modules|venv|__pycache__|queue|processed|backups?)(?:\/|$)/i.test(normalized)) return false;
  if (/(?:cookie|session|credential|secret|token|password|backup)/i.test(path.posix.basename(normalized))) return false;
  if (/^submissions\/[^/]+\/(?:README\.md|(?:solution|accepted-\d+)\.[a-z0-9]+|(?:accepted|attempts)\/[^/]+\/(?:README\.md|solution\.[a-z0-9]+))$/i.test(normalized)) {
    return !/\.(?:pem|key|p12|pfx|zip|tar|gz|exe|dll|bin)$/i.test(normalized);
  }
  if (/^notes\/.+\.(?:md|txt|json)$/i.test(normalized)) return true;
  if (/^profile\/(?:leetcode-public\.json|recent-accepted\.md|sync-health\.(?:json|md)|README\.md)$/.test(normalized)) return true;
  return reports && /^reports\/[a-z0-9-]+\.(?:json|md)$/i.test(normalized);
}

export function assertSafeContentPath(relativePath) {
  const normalized = String(relativePath || "").replace(/\\/g, "/");
  if (!isManagedContentPath(normalized)) throw new Error("Export path is outside the allowed LeetCode content paths.");
  const target = path.resolve(contentRoot, normalized);
  if (!target.startsWith(`${contentRoot}${path.sep}`)) throw new Error("Export path escapes LeetCode content root.");
  let cursor = contentRoot;
  for (const segment of normalized.split("/")) {
    cursor = path.join(cursor, segment);
    if (existsSync(cursor) && lstatSync(cursor).isSymbolicLink()) throw new Error("Export paths may not traverse symbolic links.");
  }
  return target;
}

export function assertNoCredentials(value) {
  if (/-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----|\bgh[pousr]_[A-Za-z0-9]{30,}|\bgithub_pat_[A-Za-z0-9_]{30,}|\bAKIA[A-Z0-9]{16}\b|\bsk-(?:proj-|svcacct-)?[A-Za-z0-9_-]{30,}|\bLEETCODE_SESSION\s*[:=]\s*["']?[A-Za-z0-9._-]{16,}/.test(String(value))) {
    throw new Error("Potential credential detected; import/commit blocked. No value was logged.");
  }
}

export function assertSafeChangedFiles(gitRoot, paths, prefix, options = {}) {
  for (const filename of paths) {
    const relative = filename.slice(prefix.length);
    if (!filename.startsWith(prefix) || !isManagedContentPath(relative, options)) throw new Error("Unmanaged file cannot be committed by LeetCode sync.");
    const fullPath = path.join(gitRoot, filename);
    if (!existsSync(fullPath)) continue;
    if (lstatSync(fullPath).isSymbolicLink()) throw new Error("LeetCode sync does not commit symbolic links.");
    assertNoCredentials(readFileSync(fullPath, "utf8"));
  }
}

export async function writeStableReport(filename, contents) {
  const normalize = (text) => text
    .replace(/^(?:- )?Generated at:.*$/gm, "Generated at:")
    .replace(/"generatedAt":\s*"[^"]+"/g, '"generatedAt":""');
  try {
    if (normalize(await readFile(filename, "utf8")) === normalize(contents)) return;
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
  await writeFile(filename, contents, "utf8");
}
