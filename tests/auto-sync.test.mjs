import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { copyFile, mkdir, mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import assert from "node:assert/strict";
import test from "node:test";

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
      },
    ],
  };
  await writeFile(path.join(queue, "leetcode-exports-smoke.json"), `${JSON.stringify(bundle)}\n`, "utf8");

  const result = run(process.execPath, ["scripts/auto-sync.mjs", "--once", "--inbox", inbox], root);
  assert.match(result.stdout, /Auto-push disabled/);

  assert.equal(
    await readFile(path.join(root, "submissions", "9999-sync-smoke", "solution.py"), "utf8"),
    "class Solution:\n    pass\n",
  );
  assert.equal(await readFile(path.join(root, "submissions", "9999-sync-smoke", "README.md"), "utf8"), "# Sync Smoke\n");

  const processed = await readdir(path.join(queue, "processed"));
  assert.equal(processed.length, 1);
  assert.ok(processed[0].endsWith("leetcode-exports-smoke.json"));

  const log = run("git", ["log", "--oneline", "-1"], root).stdout;
  assert.match(log, /Auto-sync LeetCode submissions/);
  assert.equal(existsSync(path.join(root, ".git", "leetcode-auto-sync.lock")), false);
});
