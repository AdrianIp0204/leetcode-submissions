import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function runScript(name, root, args = []) {
  const result = spawnSync(process.execPath, [path.join(projectRoot, "scripts", name), ...args], {
    cwd: root,
    encoding: "utf8",
  });
  assert.equal(result.status, 0, result.stderr || result.stdout);
}

async function createFixture(t, eol) {
  const fixturePrefix = path.join(os.tmpdir(), "leetcode-report-refresh-");
  const root = await mkdtemp(fixturePrefix);
  t.after(async () => {
    assert.ok(path.resolve(root).startsWith(path.resolve(fixturePrefix)));
    await rm(root, { recursive: true, force: true });
  });
  await mkdir(path.join(root, "profile"));
  await writeFile(path.join(root, "profile", "leetcode-public.json"), JSON.stringify({
    fetchedAt: "2026-07-13T15:31:10.910Z",
    username: "fixture",
    solvedByDifficulty: [{ difficulty: "All", count: 4, submissions: 4 }],
    totalByDifficulty: [{ difficulty: "All", count: 4, submissions: 4 }],
    recentAccepted: [{ titleSlug: "daily-temperatures" }],
  }));
  for (const folder of [
    "0032-longest-valid-parentheses",
    "0102-binary-tree-level-order-traversal",
    "0200-number-of-islands",
  ]) {
    const problemDir = path.join(root, "submissions", folder);
    const acceptedDir = path.join(problemDir, "accepted", "submission-1-accepted");
    await mkdir(acceptedDir, { recursive: true });
    await writeFile(path.join(acceptedDir, "solution.py"), "pass\n");
    await writeFile(path.join(problemDir, "README.md"), [
      `# ${folder}`,
      "",
      "- Submission status seen by extension: Accepted",
      "",
      "## Key Idea",
      "",
      "Maintain the traversal invariant.",
      "",
      "## Complexity",
      "",
      "Linear time and space.",
      "",
    ].join(eol));
  }
  return root;
}

for (const [label, eol] of [["LF", "\n"], ["CRLF", "\r\n"]]) {
  test(`report refresh preserves sync warnings and filters solved problems with ${label} READMEs`, async (t) => {
    const root = await createFixture(t, eol);
    const snapshotPath = path.join(root, "profile", "leetcode-public.json");
    const snapshotBefore = await readFile(snapshotPath, "utf8");
    runScript("sync-health.mjs", root);
    runScript("recommend-next.mjs", root, ["--limit", "100"]);
    runScript("portfolio-audit.mjs", root);

    assert.equal(await readFile(snapshotPath, "utf8"), snapshotBefore);
    const health = JSON.parse(await readFile(path.join(root, "profile", "sync-health.json"), "utf8"));
    assert.equal(health.localProblemFolders, 3);
    assert.equal(health.localCanonicalSolutions, 0);
    assert.equal(health.estimatedSolvedGap, 1);
    assert.equal(health.status, "behind");

    const queue = await readFile(path.join(root, "notes", "next-problems.md"), "utf8");
    const weakness = await readFile(path.join(root, "reports", "weakness-report.md"), "utf8");
    assert.match(queue, /Sync warning: repo appears 1 problems behind/);
    for (const report of [queue, weakness]) {
      assert.doesNotMatch(report, /200\. Number of Islands|102\. Binary Tree Level Order Traversal|739\. Daily Temperatures/);
      assert.match(report, /207\. Course Schedule/);
      assert.match(report, /424\. Longest Repeating Character Replacement/);
    }
    const audit = JSON.parse(await readFile(path.join(root, "reports", "portfolio-audit.json"), "utf8"));
    assert.equal(audit.totals.problemsNeedingReflection, 0);
    assert.ok(audit.problems.every((problem) => problem.hasKeyIdea && problem.hasComplexity));
  });
}

test("audit without a generated queue requests regeneration instead of hardcoded priorities", async (t) => {
  const root = await createFixture(t, "\n");
  runScript("portfolio-audit.mjs", root);
  const weakness = await readFile(path.join(root, "reports", "weakness-report.md"), "utf8");
  assert.match(weakness, /Run `npm run recommend:next`/);
  assert.doesNotMatch(weakness, /200\. Number of Islands/);
});
