#!/usr/bin/env node

import { existsSync } from "node:fs";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const submissionsDir = path.join(root, "submissions");
const reportsDir = path.join(root, "reports");
const profilePath = path.join(root, "profile", "leetcode-public.json");

const patternRules = [
  ["arrays-and-strings", /\b(array|arrays|string|strings|sentence|word|prefix|shuffle|concatenation|subarray|substrings?)\b/],
  ["math-and-digits", /\b(integer|number|numbers|digit|digits|sum|product|prime|factor|roman|sqrt|triangle|temperature|divisibility|base-k|zero|candies|ship)\b/],
  ["hashing-and-counting", /\b(duplicate|anagram|frequency|frequent|equal|equivalent|contains|appears|set-mismatch|sneaky)\b/],
  ["two-pointers", /\b(two-sum|container|sorted-array|palindrome|merge-strings|squares-of-a-sorted-array)\b/],
  ["linked-list", /\b(linked-list|sorted-list|add-two-numbers)\b/],
  ["stack", /\b(parentheses|stack|baseball)\b/],
  ["binary-search", /\b(binary-search|sqrt|median-of-two-sorted-arrays)\b/],
  ["dynamic-programming", /\b(arithmetic-slices|ways|permutation-sequence|longest-palindromic-substring|longest-substring)\b/],
  ["tree-and-graph", /\b(binary-tree|tree|graph|islands|course-schedule)\b/],
  ["sql", /\b(employees|combine-two-tables|managers)\b/],
];

function sortObject(value) {
  return Object.fromEntries(Object.entries(value).sort(([left], [right]) => left.localeCompare(right)));
}

function slugFromFolder(folder) {
  return folder.replace(/^\d{4}-/, "");
}

function idFromFolder(folder) {
  const match = folder.match(/^(\d{4})-/);
  return match ? Number(match[1]) : null;
}

function titleFromReadme(readme, folder) {
  const match = String(readme || "").match(/^#\s+(.+)$/m);
  if (match) return match[1].trim();
  return slugFromFolder(folder)
    .split("-")
    .filter(Boolean)
    .map((part) => `${part.slice(0, 1).toUpperCase()}${part.slice(1)}`)
    .join(" ");
}

function statusFromReadme(readme) {
  const status = String(readme || "").match(/Submission status seen by extension:\s*(.+)$/m);
  if (status) return status[1].trim();
  return "Not recorded";
}

function languageFromFile(file) {
  const extension = path.extname(file).replace(/^\./, "").toLowerCase();
  return normalizeLanguage(extension || "unknown");
}

function languageFromReadme(readme) {
  const language = String(readme || "").match(/^- Language:\s*(.+)$/m);
  return language ? normalizeLanguage(language[1].trim()) : null;
}

function normalizeLanguage(language) {
  const value = String(language || "").trim().toLowerCase();
  if (["py", "python", "python3"].includes(value)) return "python";
  if (["cpp", "cc", "cxx", "c++"].includes(value)) return "cpp";
  if (["ts", "typescript"].includes(value)) return "typescript";
  if (["js", "javascript"].includes(value)) return "javascript";
  if (["txt", "sql", "mysql", "postgresql", "mssql"].includes(value)) return "sql-or-text";
  return value || "unknown";
}

function readmeTodoCount(readme) {
  return (String(readme || "").match(/\bTODO\b/g) || []).length;
}

function hasFilledSection(readme, heading) {
  const value = String(readme || "");
  const pattern = new RegExp(`## ${heading}\\n\\n([\\s\\S]*?)(?:\\n## |$)`, "i");
  const match = value.match(pattern);
  if (!match) return false;
  const body = match[1].trim();
  return Boolean(body) && !/\bTODO\b/i.test(body);
}

function patternForFolder(folder) {
  const slug = slugFromFolder(folder);
  for (const [pattern, rule] of patternRules) {
    if (rule.test(slug)) return pattern;
  }
  return "uncategorized";
}

function markdownTable(rows, columns) {
  const header = `| ${columns.map((column) => column.title).join(" | ")} |`;
  const separator = `| ${columns.map(() => "---").join(" | ")} |`;
  const body = rows.map((row) => `| ${columns.map((column) => String(row[column.key] ?? "")).join(" | ")} |`);
  return [header, separator, ...body].join("\n");
}

async function readTextIfExists(filePath) {
  if (!existsSync(filePath)) return "";
  return readFile(filePath, "utf8");
}

async function readJsonIfExists(filePath) {
  if (!existsSync(filePath)) return null;
  return JSON.parse(await readFile(filePath, "utf8"));
}

async function walkFiles(dir, prefix = "") {
  if (!existsSync(dir)) return [];
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const relativePath = path.join(prefix, entry.name);
    const absolutePath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walkFiles(absolutePath, relativePath));
    } else if (entry.isFile()) {
      files.push(relativePath.replace(/\\/g, "/"));
    }
  }
  return files.sort();
}

async function inspectProblem(entry) {
  const folder = entry.name;
  const problemDir = path.join(submissionsDir, folder);
  const files = await walkFiles(problemDir);
  const readme = await readTextIfExists(path.join(problemDir, "README.md"));
  const solutionFiles = files.filter((file) => /^solution\.[^.]+$/.test(file));
  const acceptedVariantFiles = files.filter((file) => /^accepted-\d+\.[^.]+$/.test(path.basename(file)));
  const attemptFiles = files.filter((file) => file.startsWith("attempts/"));
  const languages = [...new Set([
    ...solutionFiles.map(languageFromFile),
    ...acceptedVariantFiles.map(languageFromFile),
    ...attemptFiles.map(languageFromFile),
    languageFromReadme(readme),
  ].filter(Boolean))].sort();

  return {
    id: idFromFolder(folder),
    folder,
    slug: slugFromFolder(folder),
    title: titleFromReadme(readme, folder),
    pattern: patternForFolder(folder),
    hasReadme: Boolean(readme),
    status: statusFromReadme(readme),
    todoCount: readmeTodoCount(readme),
    hasKeyIdea: hasFilledSection(readme, "Key Idea"),
    hasComplexity: hasFilledSection(readme, "Complexity"),
    solutionFiles,
    acceptedVariantFiles,
    attemptFiles,
    languages,
  };
}

async function inspectProblems() {
  if (!existsSync(submissionsDir)) return [];
  const entries = await readdir(submissionsDir, { withFileTypes: true });
  const problems = [];
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    problems.push(await inspectProblem(entry));
  }
  return problems.sort((left, right) => left.folder.localeCompare(right.folder));
}

function tally(problems, selector) {
  const counts = {};
  for (const problem of problems) {
    const values = selector(problem);
    for (const value of Array.isArray(values) ? values : [values]) {
      if (!value) continue;
      counts[value] = (counts[value] || 0) + 1;
    }
  }
  return sortObject(counts);
}

function weaknessSummary(problems) {
  const byPattern = tally(problems, (problem) => problem.pattern);
  const solvedPatternCount = Object.values(byPattern).reduce((sum, count) => sum + count, 0);
  const missingReflection = problems.filter((problem) => problem.todoCount > 0 || !problem.hasKeyIdea || !problem.hasComplexity);
  const unknownStatus = problems.filter((problem) => /unknown|not recorded/i.test(problem.status));
  const hasTypeScript = problems.some((problem) => problem.languages.includes("typescript"));
  const hasAttempts = problems.some((problem) => problem.attemptFiles.length > 0);

  const observations = [];
  observations.push(`${missingReflection.length} of ${problems.length} problem READMEs still need real reflection.`);
  if (unknownStatus.length) observations.push(`${unknownStatus.length} submissions have unknown or missing status metadata.`);
  if (hasAttempts) observations.push("Failed attempts are preserved when real source exists; keep capturing them for new work.");
  else observations.push("No failed attempts are preserved yet, so the repo cannot fully show the early struggle-to-improvement arc.");
  if (hasTypeScript) observations.push("A TypeScript track exists; expand it deliberately rather than scattering one-off language experiments.");
  else observations.push("No TypeScript solutions are present yet; future JS/TS learning should be visible as a new track.");
  if ((byPattern["tree-and-graph"] || 0) + (byPattern["dynamic-programming"] || 0) < solvedPatternCount * 0.15) {
    observations.push("Tree/graph/DP coverage is thin relative to array, string, math, and simple loop problems.");
  }

  return observations;
}

function renderReport({ generatedAt, profile, problems, trackedFileFlags }) {
  const byLanguage = tally(problems, (problem) => problem.languages);
  const byPattern = tally(problems, (problem) => problem.pattern);
  const todos = problems.filter((problem) => problem.todoCount > 0 || !problem.hasKeyIdea || !problem.hasComplexity);
  const unknownStatus = problems.filter((problem) => /unknown|not recorded/i.test(problem.status));
  const multiLanguage = problems.filter((problem) => problem.languages.length > 1);
  const withAttempts = problems.filter((problem) => problem.attemptFiles.length > 0);
  const fullStatementFlags = trackedFileFlags.filter((flag) => flag.kind === "possible_problem_statement");
  const sensitiveFlags = trackedFileFlags.filter((flag) => flag.kind === "possible_sensitive_material");
  const publicSolved = profile?.solvedByDifficulty?.find((item) => item.difficulty === "All")?.count ?? null;
  const solvedGap = typeof publicSolved === "number" ? Math.max(0, publicSolved - problems.length) : null;
  const weaknessLines = weaknessSummary(problems);
  const hasTypeScript = problems.some((problem) => problem.languages.includes("typescript"));
  const blockers = [
    solvedGap > 0 ? "the source-code sync gap" : "",
    todos.length > 0 ? "missing reflection fields" : "",
    withAttempts.length === 0 ? "no preserved failed attempts" : "",
    !hasTypeScript ? "no TypeScript track" : "",
    fullStatementFlags.length > 0 ? "possible copied problem-statement flags" : "",
    sensitiveFlags.length > 0 ? "possible sensitive-material flags" : "",
  ].filter(Boolean);
  if (solvedGap > 0) {
    weaknessLines.unshift(`${solvedGap} public solved problems are not yet represented by local source folders.`);
  }

  const topTodoRows = todos.slice(0, 20).map((problem) => ({
    problem: `[${problem.folder}](../submissions/${problem.folder}/)`,
    status: problem.status,
    missing: [
      problem.hasKeyIdea ? "" : "key idea",
      problem.hasComplexity ? "" : "complexity",
      problem.todoCount ? `${problem.todoCount} TODO` : "",
    ].filter(Boolean).join(", "),
  }));

  const lines = [
    "# Portfolio Audit",
    "",
    `- Generated at: ${generatedAt}`,
    `- Local problem folders: ${problems.length}`,
    `- Public solved count: ${publicSolved ?? "not available"}`,
    `- Estimated solved-count gap: ${solvedGap ?? "not available"}`,
    `- Problems with real attempt files: ${withAttempts.length}`,
    `- Problems with multiple languages or recorded language variants: ${multiLanguage.length}`,
    `- Problems needing reflection cleanup: ${todos.length}`,
    `- Problems with unknown/missing status metadata: ${unknownStatus.length}`,
    "",
    "## Verdict",
    "",
    blockers.length
      ? "This repo is close, but it should not be published until the blockers below are cleared. The public version should present the repo as a learning trace: accepted code, failed attempts when available, short reflections, weakness reports, and honest AI-assisted curation."
      : "Ready for public release as a learning archive. The repo has accepted code, preserved history, model-answer notes, short reflections, generated reports, and honest AI-assisted framing.",
    "",
    blockers.length
      ? `Current blockers: ${blockers.join(", ")}.`
      : "No publication-blocking issues were found by this audit. Keep the caveats below visible instead of turning the repo into a trophy shelf.",
    "",
    "## Language Coverage",
    "",
    markdownTable(
      Object.entries(byLanguage).map(([language, count]) => ({ language, count })),
      [{ key: "language", title: "Language" }, { key: "count", title: "Problems" }],
    ),
    "",
    "## Pattern Coverage",
    "",
    markdownTable(
      Object.entries(byPattern).map(([pattern, count]) => ({ pattern, count })),
      [{ key: "pattern", title: "Pattern" }, { key: "count", title: "Problems" }],
    ),
    "",
    "## Weakness Signals",
    "",
    ...weaknessLines.map((item) => `- ${item}`),
    "",
    "## Release Checklist",
    "",
    "1. Merge the latest cleanup branch into the default branch before changing repository visibility.",
    "2. Keep the README framing honest: Adrian owns the learning; Morrow assists with review, notes, reports, and curation.",
    "3. Run the extension's Collect Submission History flow if the local source archive falls behind the public solved count.",
    todos.length > 0
      ? "4. Continue filling root README reflections, starting with the First Reflection Batch below."
      : "4. Keep root README reflections filled for new accepted submissions; current reflection debt is clear.",
    "5. Start preserving failed attempts under `attempts/` for new work. Backfill old failed attempts only when real source exists.",
    hasTypeScript
      ? "6. Expand the TypeScript track deliberately instead of pretending the track is already mature."
      : "6. Add a TypeScript track when it becomes a deliberate learning goal.",
    "7. Keep reports current after meaningful sync or note changes.",
    "",
    "## Public Safety Scan",
    "",
    `- Possible copied problem-statement flags: ${fullStatementFlags.length}`,
    `- Possible sensitive-material flags: ${sensitiveFlags.length}`,
    "",
    "The scan is heuristic. Review flagged files manually before making the repository public.",
    "",
    "## First Reflection Batch",
    "",
  ];

  if (topTodoRows.length) {
    lines.push(markdownTable(
      topTodoRows,
      [{ key: "problem", title: "Problem" }, { key: "status", title: "Status" }, { key: "missing", title: "Needs" }],
    ));
  } else {
    lines.push("All problem READMEs have filled reflection sections.");
  }

  lines.push(
    "",
    "## AI-Assisted Disclosure Draft",
    "",
    "> This repository is Adrian's LeetCode learning archive. Solutions are Adrian's attempts unless a file says otherwise. Reflection notes, reports, cleanup, and repo organization are AI-assisted with Morrow, Adrian's local AI collaborator.",
    "",
  );

  return lines.join("\n");
}

function renderWeaknessReport({ generatedAt, problems }) {
  const byPattern = tally(problems, (problem) => problem.pattern);
  const byLanguage = tally(problems, (problem) => problem.languages);
  const needsReflection = problems.filter((problem) => problem.todoCount > 0 || !problem.hasKeyIdea || !problem.hasComplexity).length;
  const unknownStatus = problems.filter((problem) => /unknown|not recorded/i.test(problem.status)).length;
  const hasTypeScript = Boolean(byLanguage.typescript);
  const hasAttempts = problems.some((problem) => problem.attemptFiles.length > 0);
  const weakPatterns = [
    ["Linked list pointer work", byPattern["linked-list"] || 0, "Do list problems slowly and draw pointer movement before coding."],
    ["Stack and monotonic stack", byPattern.stack || 0, "Move from simple stack simulation into next-greater-element style problems."],
    ["Binary search invariants", byPattern["binary-search"] || 0, "Practice writing the loop condition and boundary meaning before the code."],
    ["Tree and graph traversal", byPattern["tree-and-graph"] || 0, "Build DFS/BFS muscle after arrays and strings feel less shaky."],
    ["Dynamic programming", byPattern["dynamic-programming"] || 0, "Delay harder DP until recurrence writing is deliberate, not guessed."],
  ];

  const lines = [
    "# Weakness Report",
    "",
    `- Generated at: ${generatedAt}`,
    `- Problems audited: ${problems.length}`,
    "",
    "## Current Diagnosis",
    "",
    needsReflection > 0
      ? `- Reflection debt remains a public-readiness issue: ${needsReflection} problem READMEs still need filled Key Idea and Complexity sections.`
      : "- Reflection debt is cleared for root problem READMEs; keep the habit for new accepted submissions.",
    `- Status metadata still needs cleanup for ${unknownStatus} older submissions.`,
    hasAttempts
      ? "- Failed attempts preserved in repo: yes. Keep capturing real failed attempts for new work instead of reconstructing old ones from memory."
      : "- Failed attempts preserved in repo: no. This weakens the learning-story side of the portfolio.",
    hasTypeScript
      ? "- TypeScript track present: yes. Expand it deliberately as part of JS/TS fluency for Morrow/Core work."
      : "- TypeScript track present: no. Add it only when it becomes a deliberate learning track.",
    "",
    "## Weak Pattern Areas",
    "",
    markdownTable(
      weakPatterns.map(([area, count, action]) => ({ area, current: count, action })),
      [{ key: "area", title: "Area" }, { key: "current", title: "Current Count" }, { key: "action", title: "Action" }],
    ),
    "",
    "## What Adrian Should Learn Next",
    "",
    "1. JavaScript fundamentals through LeetCode-sized functions: arrays, objects, `Map`, `Set`, strings, sorting, and loops.",
    "2. TypeScript basics after JS syntax feels less annoying: function signatures, array/object types, unions, and type narrowing.",
    "3. Pattern vocabulary: hash map, two pointers, stack, linked list, binary search, DFS/BFS, and prefix/suffix arrays.",
    "4. Testing habit: write tiny local cases before trusting a solution, especially for edge cases.",
    "5. Reflection habit: after every accepted solution, write the invariant or trick in two to five sentences.",
    "",
    "## Next Problem Priorities",
    "",
    "1. 206. Reverse Linked List - pointer rewiring.",
    "2. 21. Merge Two Sorted Lists - list merge discipline.",
    "3. 49. Group Anagrams - canonical hash key design.",
    "4. 238. Product of Array Except Self - prefix/suffix invariants.",
    "5. 128. Longest Consecutive Sequence - avoid repeated work with set starts.",
    "6. 15. 3Sum - duplicate control and two pointers.",
    "7. 424. Longest Repeating Character Replacement - sliding-window invariant.",
    "8. 739. Daily Temperatures - monotonic stack.",
    "9. 33. Search in Rotated Sorted Array - binary-search boundaries.",
    "10. 200. Number of Islands - grid DFS/BFS.",
    "",
    "## What To Avoid While Coding",
    "",
    "- Do not optimize the README while avoiding the actual hard problem.",
    "- Do not rewrite old weak solutions to look smarter without preserving the original learning trace.",
    "- Do not paste full LeetCode problem statements into the repo.",
    "- Do not accept AI notes blindly; read them and mark anything that does not match your real understanding.",
    "- Do not solve by random nested loops first unless the problem is tiny and brute force is the explicit baseline.",
    "- Do not move to many new languages at once. Python stays useful; JS/TS becomes the deliberate second track.",
    "",
    "## Morrow's Role",
    "",
    "Morrow should generate notes, audit reports, cleanup plans, and review questions, but the repo should still make Adrian's actual attempts visible. The point is not to pretend there was no AI help; the point is to make the help honest and useful.",
    "",
  ];

  return lines.join("\n");
}

async function scanTrackedText() {
  const flags = [];
  const files = await walkFiles(root);
  for (const file of files) {
    if (
      file.startsWith(".git/")
      || file.startsWith("node_modules/")
      || file.startsWith("reports/")
      || file === "scripts/portfolio-audit.mjs"
      || /\.(png|jpg|jpeg|gif|webp|pdf|zip)$/i.test(file)
    ) {
      continue;
    }
    const text = await readTextIfExists(path.join(root, file));
    const lines = text.split("\n");
    lines.forEach((line, index) => {
      if (/\b(You are given|Given an?|Example 1:|Constraints:|Input:|Output:)\b/.test(line)) {
        flags.push({ kind: "possible_problem_statement", file, line: index + 1, text: line.trim().slice(0, 160) });
      }
      if (
        /\b(leetcode_session|csrf|authorization)\b\s*[:=]/i.test(line)
        || /\bbearer\s+[a-z0-9._-]{16,}/i.test(line)
        || /\b(token|password|secret|cookie)\b\s*[:=]\s*["']?[a-z0-9._-]{16,}/i.test(line)
      ) {
        flags.push({ kind: "possible_sensitive_material", file, line: index + 1, text: line.trim().slice(0, 160) });
      }
    });
  }
  return flags;
}

async function main() {
  const generatedAt = new Date().toISOString();
  const profile = await readJsonIfExists(profilePath);
  const problems = await inspectProblems();
  const trackedFileFlags = await scanTrackedText();
  const publicSolved = profile?.solvedByDifficulty?.find((item) => item.difficulty === "All")?.count ?? null;
  const estimatedSolvedGap = typeof publicSolved === "number" ? Math.max(0, publicSolved - problems.length) : null;
  const audit = {
    generatedAt,
    totals: {
      problemFolders: problems.length,
      publicSolved,
      estimatedSolvedGap,
      problemsWithAttempts: problems.filter((problem) => problem.attemptFiles.length > 0).length,
      problemsNeedingReflection: problems.filter((problem) => problem.todoCount > 0 || !problem.hasKeyIdea || !problem.hasComplexity).length,
      problemsWithUnknownStatus: problems.filter((problem) => /unknown|not recorded/i.test(problem.status)).length,
    },
    byLanguage: tally(problems, (problem) => problem.languages),
    byPattern: tally(problems, (problem) => problem.pattern),
    problems,
    trackedFileFlags,
    weaknessSignals: weaknessSummary(problems),
  };

  await mkdir(reportsDir, { recursive: true });
  await writeFile(path.join(reportsDir, "portfolio-audit.json"), `${JSON.stringify(audit, null, 2)}\n`, "utf8");
  await writeFile(path.join(reportsDir, "portfolio-audit.md"), renderReport({ generatedAt, profile, problems, trackedFileFlags }), "utf8");
  await writeFile(path.join(reportsDir, "weakness-report.md"), renderWeaknessReport({ generatedAt, problems }), "utf8");
  console.log(`Portfolio audit: ${problems.length} problems, ${audit.totals.problemsNeedingReflection} need reflection cleanup.`);
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
