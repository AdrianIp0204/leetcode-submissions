import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { copyFile, mkdir, mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import assert from "node:assert/strict";
import test from "node:test";
import vm from "node:vm";

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

async function createTempRepo(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), "leetcode-auto-sync-test-"));
  t.after(() => rm(root, { recursive: true, force: true }));

  await mkdir(path.join(root, "scripts"), { recursive: true });
  await mkdir(path.join(root, "extension", "leetcode-exporter"), { recursive: true });
  await mkdir(path.join(root, "submissions"), { recursive: true });

  await copyFile(path.join(projectRoot, "scripts", "auto-sync.mjs"), path.join(root, "scripts", "auto-sync.mjs"));
  await writeFile(
    path.join(root, "extension", "leetcode-exporter", "manifest.json"),
    '{"manifest_version":3,"name":"Test","version":"0.0.0"}\n',
    "utf8",
  );
  await writeFile(path.join(root, "submissions", "README.md"), "# Submissions\n", "utf8");

  run("git", ["init", "-q"], root);
  run("git", ["config", "user.name", "LeetCode Sync Test"], root);
  run("git", ["config", "user.email", "leetcode-sync-test@example.invalid"], root);
  run("git", ["add", "."], root);
  run("git", ["commit", "-qm", "Initial repo"], root);

  return root;
}

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

test("extension retries an interrupted handoff and its completed bundle reaches the watcher", async (t) => {
  const root = await createTempRepo(t);
  const downloadsRoot = path.join(root, "tmp", "downloads");
  const inbox = path.join(downloadsRoot, "leetcode-submissions");
  const storage = {};
  const downloads = new Map();
  let messageListener;
  let downloadId = 0;
  const chrome = {
    storage: { local: {
      async get(defaults) { return structuredClone({ ...defaults, ...storage }); },
      async set(values) { Object.assign(storage, structuredClone(values)); },
    } },
    runtime: {
      onInstalled: { addListener() {} },
      onMessage: { addListener(listener) { messageListener = listener; } },
    },
    downloads: {
      download(options, callback) {
        const id = ++downloadId;
        const filename = path.join(downloadsRoot, options.filename);
        if (id === 1) {
          downloads.set(id, { state: "interrupted", error: "FILE_FAILED", filename });
          callback(id);
          return;
        }
        const contents = decodeURIComponent(options.url.slice(options.url.indexOf(",") + 1));
        mkdir(path.dirname(filename), { recursive: true })
          .then(() => writeFile(filename, contents))
          .then(() => {
            downloads.set(id, { state: "complete", filename });
            callback(id);
          });
      },
      search(query, callback) { callback([downloads.get(query.id)]); },
    },
  };
  const source = await readFile(path.join(projectRoot, "extension", "leetcode-exporter", "background.js"), "utf8");
  vm.runInNewContext(source, { chrome, setTimeout });
  const send = (message) => new Promise((resolve) => messageListener(message, {}, resolve));
  const payload = {
    title: "Sync Smoke",
    slug: "sync-smoke",
    status: "Accepted",
    submissionId: "999",
    path: "submissions/9999-sync-smoke/accepted/submission-999-accepted/solution.py",
    readmePath: "submissions/9999-sync-smoke/accepted/submission-999-accepted/README.md",
    code: "# Synthetic handoff fixture\npass",
    readme: "# Sync Smoke\n",
  };
  const message = { type: "auto-captured-solution", payload };
  const failed = await send(message);
  assert.equal(failed.ok, true);
  assert.match(failed.payload.autoDownloadError, /Download interrupted: FILE_FAILED/);
  assert.equal(failed.payload.pendingHandoff, 1);
  assert.equal(Object.values(storage.exportsByKey)[0].handedOffAt, undefined);

  const retried = await send(message);
  assert.equal(retried.ok, true);
  assert.equal(retried.payload.skipped, 1);
  assert.equal(retried.payload.autoDownloaded, 1);
  assert.equal(retried.payload.pendingHandoff, 0);
  assert.ok(Object.values(storage.exportsByKey)[0].handedOffAt);
  const bundle = JSON.parse(await readFile(retried.payload.handoffFilename, "utf8"));
  assert.equal(bundle.schema, "leetcode-submissions.export-bundle.v1");
  assert.equal(bundle.exports[0].submissionId, "999");
  assert.equal(bundle.exports[0].code, payload.code);

  run(process.execPath, ["scripts/auto-sync.mjs", "--once", "--inbox", inbox], root);
  assert.equal(await readFile(path.join(root, payload.path), "utf8"), `${payload.code}\n`);
  assert.equal(existsSync(retried.payload.handoffFilename), false);
  assert.equal((await readdir(path.join(inbox, "queue", "processed"))).length, 1);
  assert.match(run("git", ["log", "--oneline", "-1"], root).stdout, /Auto-sync LeetCode submissions/);
});
