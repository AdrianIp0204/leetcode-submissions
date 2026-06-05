#!/usr/bin/env node

import { existsSync } from "node:fs";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const submissionsDir = path.join(root, "submissions");
const profilePath = path.join(root, "profile", "leetcode-public.json");
const healthPath = path.join(root, "profile", "sync-health.json");

const catalog = [
  {
    id: 217,
    title: "Contains Duplicate",
    slug: "contains-duplicate",
    difficulty: "Easy",
    pattern: "Hash set",
    why: "Basic duplicate detection; should be instant before harder hash-map work.",
  },
  {
    id: 242,
    title: "Valid Anagram",
    slug: "valid-anagram",
    difficulty: "Easy",
    pattern: "Frequency map",
    why: "A clean bridge from string loops into counting invariants.",
  },
  {
    id: 121,
    title: "Best Time to Buy and Sell Stock",
    slug: "best-time-to-buy-and-sell-stock",
    difficulty: "Easy",
    pattern: "One-pass state",
    why: "Tiny problem, important invariant: keep the best prior buy state.",
  },
  {
    id: 206,
    title: "Reverse Linked List",
    slug: "reverse-linked-list",
    difficulty: "Easy",
    pattern: "Linked list pointers",
    why: "Pointer rewiring is a different muscle from array/string problems.",
  },
  {
    id: 21,
    title: "Merge Two Sorted Lists",
    slug: "merge-two-sorted-lists",
    difficulty: "Easy",
    pattern: "Linked list merge",
    why: "Foundation for list recursion and merge-style thinking.",
  },
  {
    id: 49,
    title: "Group Anagrams",
    slug: "group-anagrams",
    difficulty: "Medium",
    pattern: "Hash key design",
    why: "Forces you to choose a canonical representation, not just loop.",
  },
  {
    id: 238,
    title: "Product of Array Except Self",
    slug: "product-of-array-except-self",
    difficulty: "Medium",
    pattern: "Prefix/suffix",
    why: "A core array invariant problem with no division crutch.",
  },
  {
    id: 128,
    title: "Longest Consecutive Sequence",
    slug: "longest-consecutive-sequence",
    difficulty: "Medium",
    pattern: "Hash set sequence starts",
    why: "Teaches how to avoid repeated work by detecting sequence starts.",
  },
  {
    id: 15,
    title: "3Sum",
    slug: "3sum",
    difficulty: "Medium",
    pattern: "Sort + two pointers",
    why: "Classic duplicate-control and pointer-movement problem.",
  },
  {
    id: 11,
    title: "Container With Most Water",
    slug: "container-with-most-water",
    difficulty: "Medium",
    pattern: "Two pointers",
    why: "The proof behind moving the smaller side is more valuable than the code.",
  },
  {
    id: 424,
    title: "Longest Repeating Character Replacement",
    slug: "longest-repeating-character-replacement",
    difficulty: "Medium",
    pattern: "Sliding window",
    why: "Good first serious window invariant: window size minus max frequency.",
  },
  {
    id: 150,
    title: "Evaluate Reverse Polish Notation",
    slug: "evaluate-reverse-polish-notation",
    difficulty: "Medium",
    pattern: "Stack",
    why: "A direct stack simulation that catches order-of-operation mistakes.",
  },
  {
    id: 739,
    title: "Daily Temperatures",
    slug: "daily-temperatures",
    difficulty: "Medium",
    pattern: "Monotonic stack",
    why: "Important upgrade from simple stack to 'next greater' structure.",
  },
  {
    id: 33,
    title: "Search in Rotated Sorted Array",
    slug: "search-in-rotated-sorted-array",
    difficulty: "Medium",
    pattern: "Binary search invariant",
    why: "Builds real binary-search boundary discipline.",
  },
  {
    id: 200,
    title: "Number of Islands",
    slug: "number-of-islands",
    difficulty: "Medium",
    pattern: "Grid DFS/BFS",
    why: "First must-have graph traversal shape.",
  },
  {
    id: 102,
    title: "Binary Tree Level Order Traversal",
    slug: "binary-tree-level-order-traversal",
    difficulty: "Medium",
    pattern: "Tree BFS",
    why: "Basic tree traversal with queue state.",
  },
  {
    id: 98,
    title: "Validate Binary Search Tree",
    slug: "validate-binary-search-tree",
    difficulty: "Medium",
    pattern: "Tree recursion bounds",
    why: "Tests whether you preserve constraints through recursion.",
  },
  {
    id: 207,
    title: "Course Schedule",
    slug: "course-schedule",
    difficulty: "Medium",
    pattern: "Topological sort",
    why: "First serious directed-graph dependency problem.",
  },
  {
    id: 198,
    title: "House Robber",
    slug: "house-robber",
    difficulty: "Medium",
    pattern: "Dynamic programming",
    why: "Smallest useful DP recurrence: choose/take state compression.",
  },
  {
    id: 322,
    title: "Coin Change",
    slug: "coin-change",
    difficulty: "Medium",
    pattern: "Dynamic programming",
    why: "Good test of bottom-up recurrence and impossible states.",
  },
  {
    id: 300,
    title: "Longest Increasing Subsequence",
    slug: "longest-increasing-subsequence",
    difficulty: "Medium",
    pattern: "DP / binary search",
    why: "A strong later target after simpler DP feels stable.",
  },
];

function readArg(name, fallback) {
  const prefix = `--${name}=`;
  const value = process.argv.find((arg) => arg.startsWith(prefix));
  if (value) return value.slice(prefix.length);
  const index = process.argv.indexOf(`--${name}`);
  if (index !== -1) return process.argv[index + 1];
  return fallback;
}

async function localSolvedSlugs() {
  if (!existsSync(submissionsDir)) return new Set();

  const entries = await readdir(submissionsDir, { withFileTypes: true });
  return new Set(
    entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name.replace(/^\d{4}-/, "")),
  );
}

async function readJson(filePath, fallback) {
  if (!existsSync(filePath)) return fallback;
  return JSON.parse(await readFile(filePath, "utf8"));
}

function knownAcceptedSlugs(profile, localSlugs) {
  const slugs = new Set(localSlugs);
  for (const item of profile?.recentAccepted || []) {
    if (item.titleSlug) slugs.add(item.titleSlug);
  }
  return slugs;
}

function renderMarkdown({ profile, health, recommendations, knownCount }) {
  const solved = profile?.solvedByDifficulty?.find((item) => item.difficulty === "All")?.count ?? "?";
  const lines = [
    "# Next LeetCode Problems",
    "",
    `- Generated at: ${new Date().toISOString()}`,
    `- Public solved count: ${solved}`,
    `- Known solved by repo/public-recent evidence: ${knownCount}`,
  ];

  if (health?.estimatedSolvedGap > 0) {
    lines.push(
      `- Sync warning: repo appears ${health.estimatedSolvedGap} problems behind the public solved count. Run **Collect Past Accepted** before treating coverage as exact.`,
    );
  }

  lines.push("", "## Queue", "");
  for (const [index, problem] of recommendations.entries()) {
    lines.push(
      `${index + 1}. [${problem.id}. ${problem.title}](https://leetcode.com/problems/${problem.slug}/) - ${problem.difficulty}, ${problem.pattern}`,
      `   - Why: ${problem.why}`,
    );
  }

  lines.push(
    "",
    "## Rule",
    "",
    "- Do one new pattern problem, then write the Pattern, Key Idea, Mistake / Edge Case, and Complexity fields in the repo README.",
    "- Tiny Easy problems are warmups. The main work should move into reusable patterns.",
    "",
  );

  return lines.join("\n");
}

async function main() {
  const limit = Math.max(1, Number(readArg("limit", 12)));
  const localSlugs = await localSolvedSlugs();
  const profile = await readJson(profilePath, {});
  const health = await readJson(healthPath, null);
  const solvedSlugs = knownAcceptedSlugs(profile, localSlugs);
  const recommendations = catalog
    .filter((problem) => !solvedSlugs.has(problem.slug))
    .slice(0, limit);

  await mkdir(path.join(root, "notes"), { recursive: true });
  await writeFile(
    path.join(root, "notes", "next-problems.md"),
    renderMarkdown({
      profile,
      health,
      recommendations,
      knownCount: solvedSlugs.size,
    }),
  );

  console.log(`Wrote notes/next-problems.md with ${recommendations.length} recommendations.`);
  for (const problem of recommendations) {
    console.log(`${problem.id}. ${problem.title} (${problem.difficulty}, ${problem.pattern})`);
  }
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
