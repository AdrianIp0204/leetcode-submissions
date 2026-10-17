import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { assertNoCredentials, gitPaths, isManagedContentPath } from "./workspace.mjs";

const expectedRepository = "AdrianIp0204/leetcode-submissions";
const expectedBranch = "main";
const expectedUrl = /^https:\/\/github\.com\/AdrianIp0204\/leetcode-submissions(?:\.git)?$/;
const canonicalUrl = `https://github.com/${expectedRepository}.git`;
const attemptTimeoutMs = 4 * 60_000;

function defaultCommand(command, args, { cwd, timeout } = {}) {
  return spawnSync(command, args, {
    cwd,
    windowsHide: true,
    timeout,
    maxBuffer: 32 * 1024 * 1024,
    env: {
      ...process.env,
      GIT_TERMINAL_PROMPT: "0",
      GCM_INTERACTIVE: "Never",
      GH_PROMPT_DISABLED: "1",
      GIT_NO_REPLACE_OBJECTS: "1",
    },
  });
}

export function createGuardedPush({ gitRoot, prefix, repository, branch, command = defaultCommand, log = console.log }) {
  let lastVerifiedTip = "";
  let deadline = 0;

  function run(program, args, options = {}) {
    const remaining = deadline ? deadline - Date.now() : 30_000;
    if (remaining <= 0) throw new Error("Automatic push reached its bounded attempt deadline; local work retained for retry.");
    const result = command(program, args, { cwd: gitRoot, ...options, timeout: Math.min(30_000, remaining) });
    if (result.error || result.status !== 0) {
      if (options.missingAllowed && !result.error && result.status === 1) return "";
      throw new Error(`Automatic push verification failed (${options.label || program}); local work retained. No command output was logged.`);
    }
    if (options.requireUtf8) {
      try { return new TextDecoder("utf-8", { fatal: true }).decode(result.stdout || Buffer.alloc(0)); }
      catch { throw new Error("Automatic push requires manual review of binary or non-UTF-8 content."); }
    }
    return result.stdout?.toString("utf8") || "";
  }

  function git(args, options = {}) { return run("git", ["--no-replace-objects", ...args], options); }
  function lines(value) { return value.trim().split(/\r?\n/).filter(Boolean); }

  function assertReady({ expectedHead } = {}) {
    if (repository !== expectedRepository || branch !== expectedBranch || prefix !== "") {
      throw new Error("Automatic push requires the configured standalone AdrianIp0204/leetcode-submissions main workspace.");
    }
    if (git(["symbolic-ref", "--quiet", "--short", "HEAD"], { label: "attached main branch" }).trim() !== branch) {
      throw new Error("Automatic push requires main; import and automatic commit are paused on other branches.");
    }
    const graftPath = git(["rev-parse", "--git-path", "info/grafts"]).trim();
    if (process.env.GIT_GRAFT_FILE || existsSync(path.resolve(gitRoot, graftPath)) || git(["rev-parse", "--is-shallow-repository"]).trim() !== "false") {
      throw new Error("Automatic push requires complete, ungrafted Git history.");
    }
    const fetchUrls = lines(git(["remote", "get-url", "--all", "origin"]));
    const pushUrls = lines(git(["remote", "get-url", "--push", "--all", "origin"]));
    if (fetchUrls.length !== 1 || pushUrls.length !== 1 || !expectedUrl.test(fetchUrls[0]) || !expectedUrl.test(pushUrls[0])) {
      throw new Error("Automatic push requires one expected GitHub HTTPS fetch URL and push URL on origin.");
    }
    const rawUrls = [
      ...lines(git(["config", "--get-all", "remote.origin.url"], { missingAllowed: true })),
      ...lines(git(["config", "--get-all", "remote.origin.pushurl"], { missingAllowed: true })),
    ];
    const rewrites = gitPaths(git(["config", "--null", "--get-regexp", "^url\\..*\\.(insteadof|pushinsteadof)$"], { missingAllowed: true }));
    for (const rewrite of rewrites) {
      const separator = rewrite.indexOf("\n");
      const sourcePrefix = rewrite.slice(separator + 1);
      if (separator < 0 || [canonicalUrl, ...rawUrls, ...fetchUrls, ...pushUrls].some(url => url.startsWith(sourcePrefix))) {
        throw new Error("Automatic push refuses a relevant Git URL rewrite.");
      }
    }
    const head = git(["rev-parse", "HEAD"]).trim();
    if (expectedHead && head !== expectedHead) throw new Error("HEAD changed during automatic sync; publishing paused.");
    return head;
  }

  function github(route) {
    try {
      return JSON.parse(run("gh", ["api", route, "--hostname", "github.com"], { network: true, label: "GitHub destination metadata" }));
    } catch {
      throw new Error("Could not verify GitHub destination metadata; automatic push paused.");
    }
  }

  function verifyDestination() {
    const account = github("user");
    const repo = github(`repos/${repository}`);
    if (account.login !== "AdrianIp0204" || repo.full_name !== repository || repo.owner?.login !== account.login ||
        repo.fork !== false || repo.archived !== false || repo.default_branch !== branch || repo.permissions?.push !== true) {
      throw new Error("GitHub account, repository, branch, or write-access guard failed; automatic push paused.");
    }
  }

  function inspectAhead(base, tip) {
    git(["merge-base", "--is-ancestor", base, tip], { label: "fast-forward ancestry; remote-ahead or divergent main needs manual reconciliation" });
    const commits = lines(git(["rev-list", "--reverse", `${base}..${tip}`]));
    const checkedBlobs = new Set();
    for (const commit of commits) {
      const parents = git(["rev-list", "--parents", "-n", "1", commit]).trim().split(" ");
      if (parents.length !== 2) throw new Error("Automatic push refuses non-linear or root commits awaiting upload.");
      assertNoCredentials(git(["cat-file", "commit", commit], { requireUtf8: true }));
      const changes = gitPaths(git(["diff-tree", "--raw", "--full-index", "--no-commit-id", "--no-renames", "-r", "-z", parents[1], commit]));
      if (!changes.length || changes.length % 2) throw new Error("Automatic push requires non-empty, inspectable LeetCode commits.");
      for (let index = 0; index < changes.length; index += 2) {
        const metadata = changes[index].match(/^:(\d{6}) (\d{6}) ([a-f0-9]{40}) ([a-f0-9]{40}) [A-Z]$/);
        const filename = changes[index + 1];
        if (!metadata || !filename.startsWith(prefix) || !isManagedContentPath(filename.slice(prefix.length))) {
          throw new Error("An unpublished commit contains changes outside the allowed LeetCode content paths; automatic push paused.");
        }
        for (const [mode, oid] of [[metadata[1], metadata[3]], [metadata[2], metadata[4]]]) {
          if (mode === "000000") continue;
          if (!["100644", "100755"].includes(mode)) throw new Error("Automatic push refuses symbolic links and gitlinks.");
          if (checkedBlobs.has(oid)) continue;
          checkedBlobs.add(oid);
          const content = git(["cat-file", "blob", oid], { requireUtf8: true });
          if (content.includes("\0")) throw new Error("Automatic push requires manual review of binary or non-UTF-8 content.");
          assertNoCredentials(content);
          if (content.startsWith("version https://git-lfs.github.com/spec/v1\n")) {
            throw new Error("Automatic push requires manual review of new LFS content.");
          }
        }
      }
    }
    return commits.length;
  }

  function attemptPush() {
    const tip = assertReady();
    if (tip === lastVerifiedTip) return { status: "unchanged", tip };
    verifyDestination();
    const remote = lines(git(["ls-remote", "--exit-code", "--refs", canonicalUrl, `refs/heads/${branch}`], { network: true, label: "remote main" }));
    const row = remote.length === 1 ? remote[0].split(/\s+/) : [];
    if (!/^[a-f0-9]{40}$/.test(row[0] || "") || row[1] !== `refs/heads/${branch}`) {
      throw new Error("Expected remote main is missing; automatic push paused.");
    }
    const base = row[0];
    if (base === tip) {
      lastVerifiedTip = tip;
      return { status: "up-to-date", tip };
    }
    git(["fetch", "--no-tags", "--no-recurse-submodules", "--no-prune", canonicalUrl, base], { network: true, label: "remote main history" });
    const count = inspectAhead(base, tip);
    verifyDestination();
    assertReady({ expectedHead: tip });
    const trackingRef = `refs/remotes/origin/${branch}`;
    const trackingBefore = git(["rev-parse", "--verify", "--quiet", trackingRef], { missingAllowed: true }).trim();
    // An immutable, audited tip prevents a concurrent local commit from being swept into this push.
    git(["-c", "push.followTags=false", "-c", "remote.origin.mirror=false", "push", "--no-mirror", "--no-follow-tags", "--recurse-submodules=no", canonicalUrl, `${tip}:refs/heads/${branch}`], { network: true, label: "push; eligible local commits will retry on a later cycle" });
    lastVerifiedTip = tip;
    try {
      git(["update-ref", trackingRef, tip, trackingBefore || "0".repeat(40)], { label: "origin tracking-ref compare-and-swap" });
    } catch {
      log("Remote push succeeded; local origin/main could not be advanced safely. A later fetch can refresh it.");
    }
    log(`Pushed ${count} reviewed LeetCode commit(s) to ${repository}/${branch}.`);
    return { status: "pushed", tip, commits: count };
  }

  function pushPending() {
    deadline = Date.now() + attemptTimeoutMs;
    try { return attemptPush(); }
    finally { deadline = 0; }
  }

  return { assertReady, pushPending };
}
