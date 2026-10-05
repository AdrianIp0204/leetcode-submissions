import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { copyFile, mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const privateCodeMarker = "synthetic-source-not-for-diagnostic-output";

function run(command, args, cwd) {
  const result = spawnSync(command, args, { cwd, encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  return result.stdout;
}

async function write(root, filename, content) {
  const target = path.join(root, filename);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, content);
  return target;
}

async function fixture(t, recentAccepted = []) {
  const root = await mkdtemp(path.join(os.tmpdir(), "leetcode-sync-diagnostics-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  await mkdir(path.join(root, "scripts"));
  await copyFile(path.join(projectRoot, "scripts", "auto-sync.mjs"), path.join(root, "scripts", "auto-sync.mjs"));
  await write(root, "profile/leetcode-public.json", JSON.stringify({
    username: "fixture",
    fetchedAt: "2026-10-04T05:19:10.391Z",
    solvedByDifficulty: [{ difficulty: "All", count: 2 }],
    recentAccepted,
  }));
  run("git", ["init", "-q"], root);
  run("git", ["-c", "user.name=Sync Test", "-c", "user.email=sync@example.invalid", "add", "."], root);
  run("git", ["-c", "user.name=Sync Test", "-c", "user.email=sync@example.invalid", "commit", "-qm", "Fixture"], root);
  return root;
}

function diagnose(root, inbox) {
  const head = run("git", ["rev-parse", "HEAD"], root);
  const status = run("git", ["status", "--porcelain"], root);
  const output = run(process.execPath, [path.join(projectRoot, "scripts", "diagnose-sync.mjs"), "--inbox", inbox], root);
  assert.equal(run("git", ["rev-parse", "HEAD"], root), head);
  assert.equal(run("git", ["status", "--porcelain"], root), status);
  assert.equal(existsSync(path.join(root, ".git", "leetcode-auto-sync.lock")), false);
  assert.doesNotMatch(output, new RegExp(privateCodeMarker));
  return output;
}

test("missing recent source names #678 and requests extension backfill despite a folder and failed attempt", async (t) => {
  const metadata = {
    title: "Valid Parenthesis String",
    titleSlug: "valid-parenthesis-string",
    acceptedAt: "2026-10-04T05:16:02.000Z",
  };
  const root = await fixture(t, [metadata, metadata]);
  await write(root, "submissions/0678-valid-parenthesis-string/README.md", "# Metadata only\n");
  // Only synthetic failed-attempt data; never reconstruct the accepted #678 code.
  await write(root, "submissions/0678-valid-parenthesis-string/attempts/test/solution.py", privateCodeMarker);
  const inbox = path.join(root, "missing-inbox");
  const snapshot = await readFile(path.join(root, "profile", "leetcode-public.json"), "utf8");
  const output = diagnose(root, inbox);
  assert.match(output, /not found/);
  assert.match(output, /Estimated archive gap: 1/);
  assert.match(output, /Recent public acceptances missing local source: 1/);
  assert.match(output, /Valid Parenthesis String.*2026-10-04T05:16:02\.000Z; queued source 0, processed source 0/);
  assert.match(output, /Source unavailable in inspected local state/);
  assert.match(output, /Collect Submission History.*Hand Off Queue To Sync/);
  assert.match(output, /public fetches cannot backfill code/);
  assert.equal(existsSync(inbox), false);
  assert.equal(await readFile(path.join(root, "profile", "leetcode-public.json"), "utf8"), snapshot);
});

test("diagnosis recognizes accepted archives and canonical source but excludes empty solutions", async (t) => {
  const root = await fixture(t, [
    { titleSlug: "sync-smoke" },
    { titleSlug: "canonical-smoke" },
    { titleSlug: "empty-smoke" },
  ]);
  await write(root, "submissions/9997-sync-smoke/accepted/submission-1-accepted/solution.py", privateCodeMarker);
  await write(root, "submissions/9998-canonical-smoke/solution.py", privateCodeMarker);
  await write(root, "submissions/9999-empty-smoke/accepted/submission-2-accepted/solution.py", " \n");
  const output = diagnose(root, path.join(root, "inbox"));
  assert.match(output, /Recent public acceptances missing local source: 1/);
  assert.match(output, /- empty-smoke/);
  assert.doesNotMatch(output, /- sync-smoke|- canonical-smoke/);
});

test("diagnosis distinguishes queued, processed, incomplete and invalid handoffs without importing or exposing code", async (t) => {
  const root = await fixture(t, [
    { titleSlug: "queued-smoke" },
    { titleSlug: "processed-smoke" },
    { titleSlug: "no-code-smoke" },
  ]);
  const inbox = path.join(root, "inbox");
  function bundle(slug, code = privateCodeMarker) {
    return JSON.stringify({
      schema: "leetcode-submissions.export-bundle.v1",
      exports: [{
        status: "Accepted",
        path: `submissions/9999-${slug}/accepted/submission-1-accepted/solution.py`,
        code,
      }],
    });
  }
  const files = [
    ["queue/leetcode-exports-queued.json.dropboxignore", bundle("queued-smoke")],
    ["_queue/processed/123-leetcode-exports-processed.txt.dropboxignore", bundle("processed-smoke")],
    [".queue/leetcode-exports-empty.json", bundle("no-code-smoke", "")],
    ["queue/leetcode-exports-download.json.crdownload", privateCodeMarker],
    ["queue/leetcode-exports-broken.json", `{"broken": ${privateCodeMarker}`],
    ["queue/leetcode-exports-unsupported.json", '{"schema":"other","exports":[]}'],
  ];
  for (const [filename, content] of files) await write(inbox, filename, content);
  const output = diagnose(root, inbox);
  assert.match(output, /Handoff bundles: 3; incomplete downloads: 1; invalid bundles: 2/);
  assert.match(output, /queued-smoke.*queued source 1, processed source 0/);
  assert.match(output, /Source is in a queued handoff/);
  assert.match(output, /processed-smoke.*queued source 0, processed source 1/);
  assert.match(output, /A processed handoff contains source but this repo lacks it/);
  assert.match(output, /no-code-smoke.*queued source 0, processed source 0/);
  assert.match(output, /completed handoff filename.*custom browser download locations need a matching --inbox/);
  assert.match(output, /publication requires an explicit git push/);
  for (const [filename, content] of files) assert.equal(await readFile(path.join(inbox, filename), "utf8"), content);
  assert.equal(existsSync(path.join(inbox, "queue", "processed")), false);
  assert.equal(existsSync(path.join(root, "submissions")), false);
});
