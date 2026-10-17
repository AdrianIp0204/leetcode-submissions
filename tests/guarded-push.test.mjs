import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtemp, mkdir, writeFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { createGuardedPush } from "../scripts/guarded-push.mjs";

const repository = "AdrianIp0204/leetcode-submissions";
const githubUrl = `https://github.com/${repository}.git`;
const managed = "submissions/9999-fixture/accepted/submission-fixture-accepted/solution.py";

function run(args, cwd) {
  const result = spawnSync("git", args, { cwd, encoding: "utf8", windowsHide: true });
  assert.equal(result.status, 0, `Fixture git failed: ${args[0]}\n${result.stderr}`);
  return result.stdout.trim();
}

async function fixture(t) {
  const directory = await mkdtemp(path.join(os.tmpdir(), "leetcode-push-test-"));
  t.after(() => rm(directory, { recursive: true, force: true }));
  const root = path.join(directory, "workspace");
  const remote = path.join(directory, "remote.git");
  await mkdir(root);
  run(["init", "-q", "-b", "main"], root);
  run(["config", "user.name", "LeetCode Fixture"], root);
  run(["config", "user.email", "fixture@example.invalid"], root);
  run(["config", "core.autocrlf", "false"], root);
  async function write(filename, content) {
    await mkdir(path.dirname(path.join(root, filename)), { recursive: true });
    await writeFile(path.join(root, filename), content);
  }
  async function commit(filename = managed, content = "# fixture solution\n", message = "Fixture LeetCode change") {
    await write(filename, content);
    run(["--literal-pathspecs", "add", "--", filename], root);
    run(["--literal-pathspecs", "commit", "--only", "-qm", message, "--", filename], root);
    return run(["rev-parse", "HEAD"], root);
  }
  await write("courses/cs50x/exercise.py", "# existing course work\n");
  await write("kaggle/experiment.py", "# existing Kaggle work\n");
  await write("submissions/README.md", "# Fixture\n");
  run(["add", "."], root);
  run(["commit", "-qm", "Fixture baseline"], root);
  const base = run(["rev-parse", "HEAD"], root);
  run(["init", "-q", "--bare", remote], root);
  run(["push", remote, "HEAD:refs/heads/main"], root);
  run(["remote", "add", "origin", githubUrl], root);
  const metadata = {
    user: { login: "AdrianIp0204" },
    [`repos/${repository}`]: { full_name: repository, owner: { login: "AdrianIp0204" }, private: true, visibility: "private", fork: false, archived: false, has_pages: false, default_branch: "main", permissions: { push: true } },
    [`repos/${repository}/actions/permissions`]: { enabled: false },
    [`repos/${repository}/collaborators`]: [{ login: "AdrianIp0204" }],
  };
  const calls = [];
  const command = (program, args, options) => {
    assert(options.timeout > 0 && options.timeout <= 30_000);
    calls.push({ program, args, network: options.network === true });
    if (program === "gh") {
      assert.deepEqual(args.slice(0, 1), ["api"]);
      assert.deepEqual(args.slice(-2), ["--hostname", "github.com"]);
      assert(metadata[args[1]], "Unexpected metadata route");
      return { status: 0, stdout: Buffer.from(JSON.stringify(metadata[args[1]])) };
    }
    assert.equal(program, "git");
    assert.equal(args[0], "--no-replace-objects");
    const translated = [...args];
    if (options.network) {
      assert(translated.includes(githubUrl), "Only the immutable expected HTTPS URL may be contacted");
      translated[translated.indexOf(githubUrl)] = remote;
    }
    return spawnSync("git", translated, { cwd: options.cwd, windowsHide: true });
  };
  const guard = createGuardedPush({ gitRoot: root, prefix: "", repository, branch: "main", command, log() {} });
  const remoteTip = () => run(["rev-parse", "refs/heads/main"], remote);
  return { root, remote, base, write, commit, metadata, calls, command, guard, remoteTip };
}

test("guarded push publishes only reviewed immutable LeetCode commits and preserves other work", async t => {
  const f = await fixture(t);
  await f.write("courses/cs50x/exercise.py", "# unfinished changed course work\n");
  await f.write("kaggle/experiment.py", "# unfinished changed Kaggle work\n");
  const dirtyBefore = run(["diff", "--binary"], f.root);
  const tip = await f.commit();
  assert.equal(f.guard.pushPending().status, "pushed");
  assert.equal(f.remoteTip(), tip);
  assert.equal(run(["rev-parse", "refs/remotes/origin/main"], f.root), tip);
  assert.equal(run(["diff", "--binary"], f.root), dirtyBefore);
  assert.deepEqual(run(["diff", "--name-only", f.base, "main"], f.remote).split("\n"), [managed]);
  const pushed = f.calls.find(call => call.args.includes("push"));
  assert(pushed.args.includes(`${tip}:refs/heads/main`));
  assert(pushed.args.includes("--no-follow-tags"));
  assert(pushed.args.includes("--recurse-submodules=no"));
  const networkCalls = f.calls.filter(call => call.network).length;
  assert.equal(f.guard.pushPending().status, "unchanged");
  assert.equal(f.calls.filter(call => call.network).length, networkCalls);
});

test("failed push remains eligible and retries without creating another commit", async t => {
  const f = await fixture(t);
  const tip = await f.commit();
  const hook = path.join(f.remote, "hooks/pre-receive");
  await writeFile(hook, "#!/bin/sh\nexit 1\n", { mode: 0o755 });
  assert.throws(() => f.guard.pushPending(), /eligible local commits will retry/);
  assert.equal(f.remoteTip(), f.base);
  assert.equal(run(["rev-parse", "HEAD"], f.root), tip);
  await rm(hook);
  assert.equal(f.guard.pushPending().status, "pushed");
  assert.equal(f.remoteTip(), tip);
  assert.equal(run(["rev-list", "--count", `${f.base}..HEAD`], f.root), "1");
});

test("every unpublished commit is checked, including unrelated work hidden by later deletion", async t => {
  const f = await fixture(t);
  await f.commit("kaggle/private-note.md", "# not LeetCode\n");
  run(["rm", "kaggle/private-note.md"], f.root);
  run(["commit", "-qm", "Remove unrelated file"], f.root);
  await f.commit();
  assert.throws(() => f.guard.pushPending(), /outside the allowed LeetCode/);
  assert.equal(f.remoteTip(), f.base);
});

test("secret blobs added and deleted before upload are rejected without logging them", async t => {
  const f = await fixture(t);
  const secret = "gh" + "p_" + "fixture".repeat(7);
  await f.commit(managed, `# ${secret}\n`);
  await f.commit(managed, "# harmless replacement\n");
  assert.throws(() => f.guard.pushPending(), error => /Potential credential/.test(error.message) && !error.message.includes(secret));
  assert.equal(f.remoteTip(), f.base);
});

test("secret-bearing unpublished commit messages are rejected", async t => {
  const f = await fixture(t);
  await f.commit(managed, "# ordinary code\n", "fixture " + "gh" + "p_" + "message".repeat(7));
  assert.throws(() => f.guard.pushPending(), /Potential credential/);
  assert.equal(f.remoteTip(), f.base);
});

test("GitHub identity and destination checks fail closed", async t => {
  for (const [label, change] of [
    ["account", f => { f.metadata.user.login = "OtherAccount"; }],
    ["repository", f => { f.metadata[`repos/${repository}`].full_name = "AdrianIp0204/other"; }],
    ["owner", f => { f.metadata[`repos/${repository}`].owner.login = "OtherAccount"; }],
    ["fork", f => { f.metadata[`repos/${repository}`].fork = true; }],
    ["archived", f => { f.metadata[`repos/${repository}`].archived = true; }],
    ["branch", f => { f.metadata[`repos/${repository}`].default_branch = "other"; }],
    ["write access", f => { f.metadata[`repos/${repository}`].permissions.push = false; }],
  ]) {
    await t.test(label, async t => {
      const f = await fixture(t);
      await f.commit();
      change(f);
      assert.throws(() => f.guard.pushPending(), /guard failed/);
      assert.equal(f.remoteTip(), f.base);
      assert.equal(f.calls.some(call => call.program === "git" && call.network), false);
    });
  }
});

test("the explicitly configured public standalone repository is accepted", async t => {
  const f = await fixture(t);
  f.metadata[`repos/${repository}`].private = false;
  f.metadata[`repos/${repository}`].visibility = "public";
  delete f.metadata[`repos/${repository}/actions/permissions`];
  delete f.metadata[`repos/${repository}/collaborators`];
  const tip = await f.commit();
  assert.equal(f.guard.pushPending().status, "pushed");
  assert.equal(f.remoteTip(), tip);
});

test("the learning monorepo can never be used by the standalone publisher", async t => {
  const f = await fixture(t);
  const monorepo = createGuardedPush({ gitRoot: f.root, prefix: "leetcode/", repository, branch: "main", command: f.command });
  assert.throws(() => monorepo.assertReady(), /configured standalone/);
  const learning = createGuardedPush({ gitRoot: f.root, prefix: "", repository: "AdrianIp0204/learning", branch: "main", command: f.command });
  assert.throws(() => learning.assertReady(), /configured standalone/);
  assert.equal(f.calls.some(call => call.network), false);
});

test("wrong branch, detached HEAD, missing configuration and unsafe origin are rejected locally", async t => {
  const f = await fixture(t);
  run(["switch", "-c", "exercise"], f.root);
  assert.throws(() => f.guard.assertReady(), /requires main/);
  run(["switch", "--detach"], f.root);
  assert.throws(() => f.guard.assertReady(), /attached main/);
  run(["switch", "main"], f.root);
  const unconfigured = createGuardedPush({ gitRoot: f.root, prefix: "", command: f.command });
  assert.throws(() => unconfigured.assertReady(), /configured standalone/);
  run(["remote", "set-url", "--push", "origin", "https://example.invalid/other.git"], f.root);
  assert.throws(() => f.guard.assertReady(), /expected GitHub HTTPS/);
  run(["remote", "set-url", "--push", "origin", githubUrl], f.root);
  run(["remote", "set-url", "--push", "--add", "origin", githubUrl], f.root);
  assert.throws(() => f.guard.assertReady(), /one expected/);
  assert.equal(f.calls.some(call => call.network), false);
});

test("relevant URL rewrites are rejected even when effective URL is unchanged", async t => {
  const f = await fixture(t);
  run(["config", `url.${githubUrl}.insteadOf`, githubUrl], f.root);
  assert.throws(() => f.guard.assertReady(), /relevant Git URL rewrite/);
  run(["config", "--unset", `url.${githubUrl}.insteadOf`], f.root);
  run(["config", `url.${githubUrl}.pushInsteadOf`, githubUrl], f.root);
  assert.throws(() => f.guard.assertReady(), /relevant Git URL rewrite/);
  assert.equal(f.calls.some(call => call.network), false);
});

test("canonical-only URL rewrites with spaces in the subsection cannot bypass origin checks", async t => {
  const f = await fixture(t);
  run(["remote", "set-url", "origin", githubUrl.replace(/\.git$/, "")], f.root);
  run(["config", "url.https://example.invalid/with space/.insteadOf", githubUrl], f.root);
  assert.throws(() => f.guard.assertReady(), /relevant Git URL rewrite/);
  assert.equal(f.calls.some(call => call.network), false);
});

test("replacement refs cannot hide the original unpublished tree", async t => {
  const f = await fixture(t);
  const unsafe = await f.commit("kaggle/unrelated.md", "# unrelated unpublished material\n");
  run(["switch", "--detach", f.base], f.root);
  const safeReplacement = await f.commit();
  run(["switch", "main"], f.root);
  run(["replace", unsafe, safeReplacement], f.root);
  assert.throws(() => f.guard.pushPending(), /outside the allowed LeetCode/);
  assert.equal(f.remoteTip(), f.base);
});

test("UTF-16 or binary content cannot bypass the credential scanner", async t => {
  const f = await fixture(t);
  await f.commit(managed, Buffer.from("gh" + "p_" + "encoding".repeat(7), "utf16le"));
  assert.throws(() => f.guard.pushPending(), /binary or non-UTF-8/);
  assert.equal(f.remoteTip(), f.base);
});

test("non-UTF-8 blob bytes require manual review rather than lossy scanning", async t => {
  const f = await fixture(t);
  await f.commit(managed, Buffer.from([0xff, 0xfe, 0x0a]));
  assert.throws(() => f.guard.pushPending(), /non-UTF-8/);
  assert.equal(f.remoteTip(), f.base);
});

test("missing, advanced and divergent remote main are never overwritten", async t => {
  for (const condition of ["missing", "advanced", "divergent"]) {
    await t.test(condition, async t => {
      const f = await fixture(t);
      if (condition === "missing") {
        run(["update-ref", "-d", "refs/heads/main"], f.remote);
      } else {
        const other = path.join(path.dirname(f.root), "other");
        run(["clone", "-q", "--branch", "main", f.remote, other], f.root);
        run(["config", "user.name", "Other Fixture"], other);
        run(["config", "user.email", "other@example.invalid"], other);
        await writeFile(path.join(other, "external.md"), "# Remote work\n");
        run(["add", "external.md"], other);
        run(["commit", "-qm", "Remote change"], other);
        run(["push", "origin", "main"], other);
      }
      if (condition !== "advanced") await f.commit();
      const before = condition === "missing" ? "" : f.remoteTip();
      assert.throws(() => f.guard.pushPending(), /remote main|fast-forward ancestry/);
      if (before) assert.equal(f.remoteTip(), before);
    });
  }
});

test("merge commits and symlink or gitlink modes awaiting upload are rejected", async t => {
  for (const kind of ["merge", "symlink", "gitlink"]) {
    await t.test(kind, async t => {
      const f = await fixture(t);
      if (kind === "merge") {
        run(["switch", "-c", "side"], f.root);
        await f.commit(managed, "# side fixture\n");
        run(["switch", "main"], f.root);
        run(["merge", "--no-ff", "-m", "Fixture merge", "side"], f.root);
      } else {
        const oid = kind === "gitlink" ? f.base : run(["rev-parse", "HEAD:submissions/README.md"], f.root);
        run(["update-index", "--add", "--cacheinfo", `${kind === "gitlink" ? "160000" : "120000"},${oid},${managed}`], f.root);
        run(["commit", "-qm", "Fixture special mode"], f.root);
      }
      assert.throws(() => f.guard.pushPending(), /non-linear|symbolic links and gitlinks/);
      assert.equal(f.remoteTip(), f.base);
    });
  }
});

test("a concurrent new local commit cannot be included in the reviewed push", async t => {
  const f = await fixture(t);
  await f.commit();
  const command = (program, args, options) => {
    if (program === "git" && args.includes("diff-tree")) run(["commit", "--allow-empty", "-qm", "Concurrent local work"], f.root);
    return f.command(program, args, options);
  };
  const guard = createGuardedPush({ gitRoot: f.root, prefix: "", repository, branch: "main", command, log() {} });
  assert.throws(() => guard.pushPending(), /HEAD changed/);
  assert.equal(f.remoteTip(), f.base);
});

test("successful push never overwrites a concurrently changed origin/main tracking ref", async t => {
  const f = await fixture(t);
  const tip = await f.commit();
  run(["update-ref", "refs/remotes/origin/main", f.base], f.root);
  const other = run(["commit-tree", run(["rev-parse", `${f.base}^{tree}`], f.root), "-p", f.base, "-m", "Concurrent fetch fixture"], f.root);
  const command = (program, args, options) => {
    const result = f.command(program, args, options);
    if (program === "git" && args.includes("push") && result.status === 0) run(["update-ref", "refs/remotes/origin/main", other], f.root);
    return result;
  };
  const guard = createGuardedPush({ gitRoot: f.root, prefix: "", repository, branch: "main", command, log() {} });
  assert.equal(guard.pushPending().status, "pushed");
  assert.equal(f.remoteTip(), tip);
  assert.equal(run(["rev-parse", "refs/remotes/origin/main"], f.root), other);
});
