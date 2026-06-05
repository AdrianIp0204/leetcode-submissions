#!/usr/bin/env node

import { existsSync } from "node:fs";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const profilePath = path.join(root, "profile", "leetcode-public.json");
const submissionsDir = path.join(root, "submissions");

function statFor(items = [], difficulty = "All") {
  return items.find((item) => item.difficulty === difficulty) || {
    difficulty,
    count: 0,
    submissions: 0,
  };
}

async function localProblems() {
  if (!existsSync(submissionsDir)) return [];

  const entries = await readdir(submissionsDir, { withFileTypes: true });
  const problems = [];
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const problemDir = path.join(submissionsDir, entry.name);
    const problemEntries = await readdir(problemDir, { withFileTypes: true });
    const hasCanonicalSolution = problemEntries.some(
      (problemEntry) => problemEntry.isFile() && /^solution\./.test(problemEntry.name),
    );
    const slug = entry.name.replace(/^\d{4}-/, "");
    problems.push({
      folder: entry.name,
      slug,
      hasCanonicalSolution,
    });
  }

  return problems.sort((left, right) => left.folder.localeCompare(right.folder));
}

function renderMarkdown({ snapshot, health }) {
  const lines = [
    "# LeetCode Sync Health",
    "",
    `- Generated at: ${health.generatedAt}`,
    `- Profile fetched at: ${snapshot.fetchedAt}`,
    `- Username: ${snapshot.username}`,
    `- Public solved count: ${health.publicAcceptedSolved}`,
    `- Public accepted submissions: ${health.publicAcceptedSubmissions}`,
    `- Public attempted problems: ${health.publicAttemptedProblems}`,
    `- Public total submissions: ${health.publicTotalSubmissions}`,
    `- Local problem folders: ${health.localProblemFolders}`,
    `- Local canonical solutions: ${health.localCanonicalSolutions}`,
    `- Estimated solved-count gap: ${health.estimatedSolvedGap}`,
    "",
    "## Verdict",
    "",
  ];

  if (health.estimatedSolvedGap > 0) {
    lines.push(
      `- Warning: LeetCode shows ${health.publicAcceptedSolved} solved problems, but this repo has ${health.localProblemFolders} local problem folders.`,
      "- Run the extension's **Collect Past Accepted** while logged in, then let the local watcher import and push the queue.",
      "- Recommendation quality is limited until the repo catches up, because local pattern coverage is incomplete.",
    );
  } else {
    lines.push("- OK: local problem folders are not behind the public solved count.");
  }

  lines.push("");
  return lines.join("\n");
}

async function main() {
  if (!existsSync(profilePath)) {
    throw new Error("Missing profile/leetcode-public.json. Run npm run fetch:public first.");
  }

  const snapshot = JSON.parse(await readFile(profilePath, "utf8"));
  const acceptedAll = statFor(snapshot.solvedByDifficulty, "All");
  const totalAll = statFor(snapshot.totalByDifficulty, "All");
  const problems = await localProblems();
  const localCanonicalSolutions = problems.filter((problem) => problem.hasCanonicalSolution).length;
  const estimatedSolvedGap = Math.max(0, acceptedAll.count - problems.length);
  const health = {
    generatedAt: new Date().toISOString(),
    username: snapshot.username,
    profileFetchedAt: snapshot.fetchedAt,
    publicAcceptedSolved: acceptedAll.count,
    publicAcceptedSubmissions: acceptedAll.submissions,
    publicAttemptedProblems: totalAll.count,
    publicTotalSubmissions: totalAll.submissions,
    localProblemFolders: problems.length,
    localCanonicalSolutions,
    estimatedSolvedGap,
    status: estimatedSolvedGap > 0 ? "behind" : "ok",
    knownLocalProblems: problems,
  };

  await mkdir(path.join(root, "profile"), { recursive: true });
  await writeFile(path.join(root, "profile", "sync-health.json"), `${JSON.stringify(health, null, 2)}\n`);
  await writeFile(path.join(root, "profile", "sync-health.md"), renderMarkdown({ snapshot, health }));

  console.log(
    `LeetCode sync health: ${health.status}; public solved ${acceptedAll.count}, local folders ${problems.length}, gap ${estimatedSolvedGap}.`,
  );
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
