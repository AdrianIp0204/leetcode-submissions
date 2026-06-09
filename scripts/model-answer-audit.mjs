#!/usr/bin/env node

import { existsSync } from "node:fs";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const submissionsDir = path.join(root, "submissions");
const modelAnswersDir = path.join(root, "notes", "model-answers");
const reportsDir = path.join(root, "reports");
const reportPath = path.join(reportsDir, "model-answer-coverage.md");

const starterPriority = [
  "0001-two-sum",
  "0020-valid-parentheses",
  "0021-merge-two-sorted-lists",
  "0026-remove-duplicates-from-sorted-array",
  "0028-find-the-index-of-the-first-occurrence-in-a-string",
  "0069-sqrtx",
  "0121-best-time-to-buy-and-sell-stock",
  "0125-valid-palindrome",
  "0136-single-number",
  "0206-reverse-linked-list",
  "0217-contains-duplicate",
  "0242-valid-anagram",
  "0283-move-zeroes",
  "0344-reverse-string",
  "0977-squares-of-a-sorted-array",
  "0049-group-anagrams",
  "0128-longest-consecutive-sequence",
  "0238-product-of-array-except-self",
  "0347-top-k-frequent-elements",
  "0692-top-k-frequent-words",
  "0413-arithmetic-slices",
  "1015-smallest-integer-divisible-by-k",
  "1224-maximum-equal-frequency",
  "1866-number-of-ways-to-rearrange-sticks-with-k-sticks-visible",
  "2196-create-binary-tree-from-descriptions",
];

function titleFromReadme(readme, folder) {
  const match = String(readme || "").match(/^#\s+(.+)$/m);
  if (match) return match[1].trim();
  return folder
    .replace(/^\d{4}-/, "")
    .split("-")
    .filter(Boolean)
    .map((part) => `${part.slice(0, 1).toUpperCase()}${part.slice(1)}`)
    .join(" ");
}

function markdownTable(rows, columns) {
  const header = `| ${columns.map((column) => column.title).join(" | ")} |`;
  const separator = `| ${columns.map(() => "---").join(" | ")} |`;
  const body = rows.map((row) => `| ${columns.map((column) => row[column.key] ?? "").join(" | ")} |`);
  return [header, separator, ...body].join("\n");
}

function hasSection(text, heading) {
  return new RegExp(`^## ${heading}\\s*$`, "m").test(text);
}

async function readTextIfExists(filePath) {
  if (!existsSync(filePath)) return "";
  return readFile(filePath, "utf8");
}

async function listProblemFolders() {
  const entries = await readdir(submissionsDir, { withFileTypes: true });
  const problems = [];
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const folder = entry.name;
    const readme = await readTextIfExists(path.join(submissionsDir, folder, "README.md"));
    problems.push({
      folder,
      title: titleFromReadme(readme, folder),
    });
  }
  return problems.sort((left, right) => left.folder.localeCompare(right.folder));
}

async function listModelNotes() {
  if (!existsSync(modelAnswersDir)) return new Map();
  const entries = await readdir(modelAnswersDir, { withFileTypes: true });
  const notes = new Map();
  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith(".md") || entry.name === "README.md") continue;
    const folder = entry.name.replace(/\.md$/, "");
    const filePath = path.join(modelAnswersDir, entry.name);
    const text = await readFile(filePath, "utf8");
    notes.set(folder, {
      file: `notes/model-answers/${entry.name}`,
      title: titleFromReadme(text, folder),
      hasModelSolution: hasSection(text, "Model Solution"),
      hasWhy: hasSection(text, "Why This Is The Model"),
      hasComplexity: hasSection(text, "Complexity"),
      todoCount: (text.match(/\bTODO\b/g) || []).length,
    });
  }
  return notes;
}

function rankMissing(problem) {
  const priorityIndex = starterPriority.indexOf(problem.folder);
  return priorityIndex === -1 ? starterPriority.length + 1 : priorityIndex;
}

function renderReport({ generatedAt, problems, notes }) {
  const covered = problems.filter((problem) => notes.has(problem.folder));
  const missing = problems.filter((problem) => !notes.has(problem.folder));
  const invalid = [...notes.keys()].filter((folder) => !problems.some((problem) => problem.folder === folder)).sort();
  const incomplete = covered
    .map((problem) => ({ problem, note: notes.get(problem.folder) }))
    .filter(({ note }) => !note.hasModelSolution || !note.hasWhy || !note.hasComplexity || note.todoCount > 0);
  const nextRows = [...missing]
    .sort((left, right) => rankMissing(left) - rankMissing(right) || left.folder.localeCompare(right.folder))
    .slice(0, 30)
    .map((problem) => ({
      problem: `[${problem.folder}](../submissions/${problem.folder}/)`,
      title: problem.title,
      reason: starterPriority.includes(problem.folder) ? "starter priority" : "uncovered",
    }));
  const coveredRows = covered.slice(0, 50).map((problem) => ({
    problem: `[${problem.folder}](../notes/model-answers/${problem.folder}.md)`,
    title: problem.title,
  }));

  const lines = [
    "# Model Answer Coverage",
    "",
    `- Generated at: ${generatedAt}`,
    `- Problems in repo: ${problems.length}`,
    `- Model-answer notes: ${covered.length}`,
    `- Missing model-answer notes: ${missing.length}`,
    `- Incomplete model-answer notes: ${incomplete.length}`,
    `- Notes without matching problem folder: ${invalid.length}`,
    "",
    "## Verdict",
    "",
    covered.length === 0
      ? "No model-answer track exists yet. Start with core patterns before trying to cover every easy problem."
      : "The model-answer track has started. Keep adding notes in batches, prioritizing reusable patterns over simple one-line problems.",
    "",
    "## Next Coverage Batch",
    "",
    nextRows.length
      ? markdownTable(nextRows, [
          { key: "problem", title: "Problem" },
          { key: "title", title: "Title" },
          { key: "reason", title: "Reason" },
        ])
      : "Every problem currently has a model-answer note.",
    "",
    "## Existing Model Answers",
    "",
    coveredRows.length
      ? markdownTable(coveredRows, [
          { key: "problem", title: "Note" },
          { key: "title", title: "Title" },
        ])
      : "None yet.",
  ];

  if (incomplete.length) {
    lines.push(
      "",
      "## Incomplete Notes",
      "",
      markdownTable(
        incomplete.map(({ problem, note }) => ({
          note: `[${problem.folder}](../${note.file})`,
          missing: [
            note.hasModelSolution ? "" : "model solution",
            note.hasWhy ? "" : "why",
            note.hasComplexity ? "" : "complexity",
            note.todoCount ? `${note.todoCount} TODO` : "",
          ].filter(Boolean).join(", "),
        })),
        [
          { key: "note", title: "Note" },
          { key: "missing", title: "Missing" },
        ],
      ),
    );
  }

  if (invalid.length) {
    lines.push(
      "",
      "## Orphan Notes",
      "",
      invalid.map((folder) => `- \`notes/model-answers/${folder}.md\``).join("\n"),
    );
  }

  lines.push("");
  return lines.join("\n");
}

await mkdir(reportsDir, { recursive: true });
const problems = await listProblemFolders();
const notes = await listModelNotes();
const report = renderReport({
  generatedAt: new Date().toISOString(),
  problems,
  notes,
});
await writeFile(reportPath, report, "utf8");
console.log(`Wrote ${path.relative(root, reportPath)}`);
