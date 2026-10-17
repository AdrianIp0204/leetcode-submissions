import { spawn, spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { copyFile, mkdir, mkdtemp, readFile, readdir, rm, symlink, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import assert from "node:assert/strict";
import test from "node:test";
import { once } from "node:events";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function run(command, args, cwd) {
  const result = spawnSync(command, args, {
    cwd,
    encoding: "utf8",
    stdio: "pipe",
  });

  if (result.status !== 0) {
    throw new Error(
      `${command} ${args.join(" ")} failed\nstdout:\n${result.stdout}\nstderr:\n${result.stderr}`,
    );
  }

  return result;
}

async function createTempRepo(t, { monorepo = false } = {}) {
  const gitRoot = await mkdtemp(path.join(os.tmpdir(), "leetcode-auto-sync-test-"));
  const root = monorepo ? path.join(gitRoot, "leetcode") : gitRoot;
  t.after(() => rm(gitRoot, { recursive: true, force: true }));

  await mkdir(path.join(root, "scripts"), { recursive: true });
  await mkdir(path.join(root, "extension", "leetcode-exporter"), { recursive: true });
  await mkdir(path.join(root, "submissions"), { recursive: true });

  for (const filename of ["auto-sync.mjs", "guarded-push.mjs", "workspace.mjs"]) {
    await copyFile(path.join(projectRoot, "scripts", filename), path.join(root, "scripts", filename));
  }
  await writeFile(
    path.join(root, "extension", "leetcode-exporter", "manifest.json"),
    '{"manifest_version":3,"name":"Test","version":"0.0.0"}\n',
    "utf8",
  );
  await writeFile(path.join(root, "submissions", "README.md"), "# Submissions\n", "utf8");

  run("git", ["init", "-q"], gitRoot);
  run("git", ["config", "user.name", "LeetCode Sync Test"], root);
  run("git", ["config", "user.email", "leetcode-sync-test@example.invalid"], root);
  run("git", ["add", "."], root);
  run("git", ["commit", "-qm", "Initial repo"], root);

  return root;
}

async function queueExport(root, payload = {}, filename = "leetcode-exports-fixture.json") {
  const inbox = path.join(root, "tmp", "inbox");
  const queue = path.join(inbox, "queue");
  await mkdir(queue, { recursive: true });
  await writeFile(path.join(queue, filename), JSON.stringify({
    schema: "leetcode-submissions.export-bundle.v1",
    exports: [{ path: "submissions/9999-fixture/solution.py", code: "# fixture only\n", status: "Accepted", submissionId: "fixture", ...payload }],
  }));
  return inbox;
}

function sync(root, inbox, cwd = root) {
  return run(process.execPath, [path.join(root, "scripts", "auto-sync.mjs"), "--once", "--inbox", inbox], cwd);
}

test("push mode pauses before importing on another branch and resident errors do not terminate the watcher", async (t) => {
  const root = await createTempRepo(t);
  const gitRoot = root;
  run("git", ["branch", "-M", "exercise"], gitRoot);
  run("git", ["remote", "add", "origin", "https://github.com/AdrianIp0204/leetcode-submissions.git"], gitRoot);
  const inbox = await queueExport(root);
  const before = run("git", ["rev-parse", "HEAD"], gitRoot).stdout;
  const args = [path.join(root, "scripts/auto-sync.mjs"), "--inbox", inbox, "--push"];
  const env = { ...process.env };
  delete env.LEETCODE_SYNC_PUSH_REPOSITORY;
  delete env.LEETCODE_SYNC_PUSH_BRANCH;
  const invalid = spawnSync(process.execPath, [...args, "--once"], {
    cwd: gitRoot,
    env: { ...env, LEETCODE_SYNC_PUSH_REPOSITORY: "AdrianIp0204/learning" },
    encoding: "utf8",
    windowsHide: true,
  });
  assert.equal(invalid.status, 1);
  assert.match(invalid.stderr, /configured standalone/);
  const single = spawnSync(process.execPath, [...args, "--once"], { cwd: gitRoot, env, encoding: "utf8", windowsHide: true });
  assert.equal(single.status, 1);
  assert.match(single.stderr, /requires main/);
  assert.equal(existsSync(path.join(inbox, "queue/leetcode-exports-fixture.json")), true);
  assert.equal(existsSync(path.join(root, "submissions/9999-fixture")), false);
  const child = spawn(process.execPath, args, { cwd: gitRoot, env, windowsHide: true, stdio: ["ignore", "pipe", "pipe"] });
  try {
    await new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error("Resident watcher did not report its guarded failure")), 10_000);
      child.stderr.on("data", data => {
        if (data.toString().includes("requires main")) { clearTimeout(timer); resolve(); }
      });
      child.once("exit", () => { clearTimeout(timer); reject(new Error("Resident watcher exited on its first guarded failure")); });
      child.once("error", error => { clearTimeout(timer); reject(error); });
    });
    assert.equal(child.exitCode, null);
    assert.equal(run("git", ["rev-parse", "HEAD"], gitRoot).stdout, before);
    assert.equal(existsSync(path.join(inbox, "queue/leetcode-exports-fixture.json")), true);
  } finally {
    if (child.exitCode === null && child.signalCode === null) {
      const exited = once(child, "exit");
      child.kill();
      await exited;
    }
  }
});

test("default no-push mode retains its existing initial-error exit behavior", async (t) => {
  const root = await createTempRepo(t);
  const inbox = await queueExport(root);
  await writeFile(path.join(inbox, "queue/leetcode-exports-fixture.json"), "invalid fixture JSON");
  const result = spawnSync(process.execPath, [path.join(root, "scripts/auto-sync.mjs"), "--inbox", inbox], {
    cwd: root, env: { ...process.env, LEETCODE_SYNC_PUSH: "0" }, windowsHide: true, encoding: "utf8", timeout: 10_000,
  });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /Could not read a handoff bundle as JSON/);
  assert.equal(existsSync(path.join(inbox, "queue/leetcode-exports-fixture.json")), true);
});

test("auto-sync retries a rejected push on an idle cycle without recommitting or publishing unrelated work", async (t) => {
  const root = await createTempRepo(t);
  const gitRoot = root;
  run("git", ["branch", "-M", "main"], gitRoot);
  run("git", ["config", "core.autocrlf", "false"], gitRoot);
  const remoteParent = await mkdtemp(path.join(os.tmpdir(), "leetcode-push-remote-test-"));
  t.after(() => rm(remoteParent, { recursive: true, force: true }));
  const remote = path.join(remoteParent, "remote.git");
  run("git", ["init", "-q", "--bare", remote], gitRoot);
  run("git", ["push", remote, "HEAD:refs/heads/main"], gitRoot);
  run("git", ["remote", "add", "origin", "https://github.com/AdrianIp0204/leetcode-submissions.git"], gitRoot);
  const before = run("git", ["rev-parse", "HEAD"], gitRoot).stdout.trim();
  const helperUrl = new URL("../scripts/guarded-push.mjs", import.meta.url).href;
  // This adapter exists only in the disposable copy; production has no metadata bypass.
  await writeFile(path.join(root, "scripts/guarded-push.mjs"), `
import { createGuardedPush as realGuard } from ${JSON.stringify(helperUrl)};
import { spawnSync } from "node:child_process";
const repository = "AdrianIp0204/leetcode-submissions";
const metadata = {
  user: { login: "AdrianIp0204" },
  ["repos/" + repository]: { full_name: repository, owner: { login: "AdrianIp0204" }, private: true, visibility: "private", fork: false, archived: false, has_pages: false, default_branch: "main", permissions: { push: true } },
  ["repos/" + repository + "/actions/permissions"]: { enabled: false },
  ["repos/" + repository + "/collaborators"]: [{ login: "AdrianIp0204" }],
};
export function createGuardedPush(options) {
  return realGuard({ ...options, command(program, args, execution) {
    if (program === "gh") return { status: 0, stdout: Buffer.from(JSON.stringify(metadata[args[1]])) };
    if (program !== "git") throw new Error("Unexpected fixture command");
    const translated = args.map(value => value === "https://github.com/AdrianIp0204/leetcode-submissions.git" ? ${JSON.stringify(remote)} : value);
    if (execution.network && !translated.includes(${JSON.stringify(remote)})) throw new Error("Unexpected fixture network target");
    return spawnSync(program, translated, { cwd: execution.cwd, windowsHide: true });
  } });
}
`);
  await mkdir(path.join(gitRoot, "courses/cs50x"), { recursive: true });
  await mkdir(path.join(gitRoot, "kaggle"), { recursive: true });
  await writeFile(path.join(gitRoot, "courses/cs50x/unfinished.py"), "# preserve unfinished course work\n");
  await writeFile(path.join(gitRoot, "kaggle/unfinished.py"), "# preserve unfinished Kaggle work\n");
  const inbox = await queueExport(root);
  const hook = path.join(remote, "hooks/pre-receive");
  await writeFile(hook, "#!/bin/sh\nexit 1\n", { mode: 0o755 });
  const args = [path.join(root, "scripts/auto-sync.mjs"), "--once", "--inbox", inbox, "--push"];
  const env = { ...process.env };
  delete env.LEETCODE_SYNC_PUSH_REPOSITORY;
  delete env.LEETCODE_SYNC_PUSH_BRANCH;
  const options = { cwd: gitRoot, windowsHide: true, encoding: "utf8", env };
  const rejected = spawnSync(process.execPath, args, options);
  assert.equal(rejected.status, 1);
  assert.match(rejected.stderr, /eligible local commits will retry/);
  const localTip = run("git", ["rev-parse", "HEAD"], gitRoot).stdout.trim();
  assert.notEqual(localTip, before);
  assert.equal(run("git", ["rev-parse", "main"], remote).stdout.trim(), before);
  await rm(hook);
  const retried = spawnSync(process.execPath, args, options);
  assert.equal(retried.status, 0, retried.stderr);
  assert.match(retried.stdout, /Pushed 1 reviewed LeetCode commit/);
  assert.equal(run("git", ["rev-parse", "HEAD"], gitRoot).stdout.trim(), localTip);
  assert.equal(run("git", ["rev-parse", "main"], remote).stdout.trim(), localTip);
  assert.equal(run("git", ["diff", "--name-only", before, localTip], remote).stdout.trim(), "submissions/9999-fixture/accepted/submission-fixture-accepted/solution.py");
  assert.equal(await readFile(path.join(gitRoot, "courses/cs50x/unfinished.py"), "utf8"), "# preserve unfinished course work\n");
  assert.equal(await readFile(path.join(gitRoot, "kaggle/unfinished.py"), "utf8"), "# preserve unfinished Kaggle work\n");
});

test("auto-sync imports extension bundle, archives it, and commits managed files", async (t) => {
  const root = await createTempRepo(t);
  const inbox = path.join(root, "tmp", "inbox");
  const queue = path.join(inbox, "queue");
  await mkdir(queue, { recursive: true });

  const bundle = {
    schema: "leetcode-submissions.export-bundle.v1",
    exportedAt: "2026-06-08T00:00:00.000Z",
    reason: "test",
    exports: [
      {
        title: "Sync Smoke",
        status: "Accepted",
        language: "python3",
        path: "submissions/9999-sync-smoke/solution.py",
        readmePath: "submissions/9999-sync-smoke/README.md",
        code: "class Solution:\n    pass",
        readme: "# Sync Smoke\n",
        submissionId: "999",
      },
    ],
  };
  await writeFile(path.join(queue, "leetcode-exports-smoke.json"), `${JSON.stringify(bundle)}\n`, "utf8");

  const result = run(process.execPath, ["scripts/auto-sync.mjs", "--once", "--inbox", inbox], root);
  assert.match(result.stdout, /Auto-push disabled/);

  assert.equal(
    await readFile(
      path.join(root, "submissions", "9999-sync-smoke", "accepted", "submission-999-accepted", "solution.py"),
      "utf8",
    ),
    "class Solution:\n    pass\n",
  );
  assert.equal(
    await readFile(
      path.join(root, "submissions", "9999-sync-smoke", "accepted", "submission-999-accepted", "README.md"),
      "utf8",
    ),
    "# Sync Smoke\n",
  );

  const processed = await readdir(path.join(queue, "processed"));
  assert.equal(processed.length, 1);
  assert.ok(processed[0].endsWith("leetcode-exports-smoke.json"));

  const log = run("git", ["log", "--oneline", "-1"], root).stdout;
  assert.match(log, /Auto-sync LeetCode submissions/);
  assert.equal(existsSync(path.join(root, ".git", "leetcode-auto-sync.lock")), false);
});

test("auto-sync preserves multiple accepted submissions from legacy root solution paths", async (t) => {
  const root = await createTempRepo(t);
  const inbox = path.join(root, "tmp", "inbox");
  const queue = path.join(inbox, "queue");
  await mkdir(queue, { recursive: true });

  const bundle = {
    schema: "leetcode-submissions.export-bundle.v1",
    exportedAt: "2026-06-09T00:00:00.000Z",
    reason: "legacy-history-backfill",
    exports: [
      {
        title: "Two Sum",
        status: "Accepted",
        language: "python3",
        path: "submissions/0001-two-sum/solution.py",
        readmePath: "submissions/0001-two-sum/README.md",
        code: "class Solution:\n    def twoSum(self, nums, target):\n        return [0, 1]",
        readme: "# Two Sum first\n",
        submissionId: "111",
        submittedAt: "2026-06-08T00:00:00.000Z",
      },
      {
        title: "Two Sum",
        status: "Accepted",
        language: "python3",
        path: "submissions/0001-two-sum/solution.py",
        readmePath: "submissions/0001-two-sum/README.md",
        code: "class Solution:\n    def twoSum(self, nums, target):\n        return [1, 0]",
        readme: "# Two Sum second\n",
        submissionId: "222",
        submittedAt: "2026-06-09T00:00:00.000Z",
      },
    ],
  };
  await writeFile(path.join(queue, "leetcode-exports-legacy-accepted.json"), `${JSON.stringify(bundle)}\n`, "utf8");

  run(process.execPath, ["scripts/auto-sync.mjs", "--once", "--inbox", inbox], root);

  assert.equal(
    await readFile(
      path.join(root, "submissions", "0001-two-sum", "accepted", "submission-111-accepted", "solution.py"),
      "utf8",
    ),
    "class Solution:\n    def twoSum(self, nums, target):\n        return [0, 1]\n",
  );
  assert.equal(
    await readFile(
      path.join(root, "submissions", "0001-two-sum", "accepted", "submission-222-accepted", "solution.py"),
      "utf8",
    ),
    "class Solution:\n    def twoSum(self, nums, target):\n        return [1, 0]\n",
  );
  assert.equal(existsSync(path.join(root, "submissions", "0001-two-sum", "solution.py")), false);
});

test("unsafe destinations and credential payloads never enter the tree or processed queue", async (t) => {
  for (const payload of [
    { path: "../courses/cs50x/solution.py", status: "Wrong Answer" },
    { path: ".git/config", status: "Wrong Answer" },
    { path: "submissions/fixture/solution.py", status: "Wrong Answer", readmePath: "profile/leetcode-public.json", readme: "{}" },
    { code: "-----BEGIN " + "PRIVATE KEY-----\nfixture\n" },
  ]) {
    const root = await createTempRepo(t);
    const before = run("git", ["rev-parse", "HEAD"], root).stdout;
    const inbox = await queueExport(root, payload);
    const result = spawnSync(process.execPath, [path.join(root, "scripts", "auto-sync.mjs"), "--once", "--inbox", inbox], { cwd: root, encoding: "utf8" });
    assert.notEqual(result.status, 0);
    assert.equal(run("git", ["rev-parse", "HEAD"], root).stdout, before);
    assert.equal(existsSync(path.join(inbox, "queue", "processed")), false);
    assert.deepEqual(await readdir(path.join(root, "submissions")), ["README.md"]);
  }
});

test("malformed bundles are retained without logging their contents", async (t) => {
  const root = await createTempRepo(t);
  const inbox = await queueExport(root);
  const filename = path.join(inbox, "queue", "leetcode-exports-fixture.json");
  const privateMarker = "private-fixture-must-not-be-logged";
  await writeFile(filename, privateMarker);
  const result = spawnSync(process.execPath, [path.join(root, "scripts", "auto-sync.mjs"), "--once", "--inbox", inbox], { cwd: root, encoding: "utf8" });
  assert.notEqual(result.status, 0);
  assert.doesNotMatch(result.stderr + result.stdout, new RegExp(privateMarker));
  assert.equal(await readFile(filename, "utf8"), privateMarker);
  assert.equal(existsSync(path.join(inbox, "queue", "processed")), false);
});

test("imports reject symbolic-link destinations outside the content root", async (t) => {
  const root = await createTempRepo(t);
  const outside = path.join(root, "courses");
  await mkdir(outside);
  const link = path.join(root, "submissions", "9999-fixture");
  await symlink(outside, link, process.platform === "win32" ? "junction" : "dir");
  const inbox = await queueExport(root);
  const result = spawnSync(process.execPath, [path.join(root, "scripts", "auto-sync.mjs"), "--once", "--inbox", inbox], { cwd: root, encoding: "utf8" });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /symbolic links/);
  assert.deepEqual(await readdir(outside), []);
  assert.equal(existsSync(path.join(inbox, "queue", "processed")), false);
});

test("worktree .git pointer uses the actual Git directory for sync locks", async (t) => {
  const root = await createTempRepo(t);
  const gitRoot = root;
  const worktree = path.join(gitRoot, "fixture-worktree");
  run("git", ["worktree", "add", "--detach", worktree, "HEAD"], gitRoot);
  t.after(() => { spawnSync("git", ["worktree", "remove", "--force", worktree], { cwd: gitRoot }); });
  const target = worktree;
  const inbox = await queueExport(target);
  sync(target, inbox, worktree);
  assert.match(run("git", ["log", "-1", "--format=%s"], target).stdout, /Auto-sync LeetCode/);
});
