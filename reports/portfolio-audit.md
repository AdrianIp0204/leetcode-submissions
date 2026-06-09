# Portfolio Audit

- Generated at: 2026-06-09T11:57:07.984Z
- Local problem folders: 128
- Public solved count: 154
- Estimated solved-count gap: 26
- Problems with real attempt files: 0
- Problems with multiple languages or recorded language variants: 5
- Problems needing reflection cleanup: 123
- Problems with unknown/missing status metadata: 9

## Verdict

This repo is worth making public later, but not as a raw dump. It already has a privacy-first sync system and a large accepted-solution archive. The public version should present the repo as a learning trace: accepted code, failed attempts when available, short reflections, weakness reports, and honest AI-assisted curation.

Do not publish yet. The main blockers are the source-code sync gap, missing reflection fields, no preserved failed attempts, no TypeScript track, and public-facing explanation still needing a final pass.

## Language Coverage

| Language | Problems |
| --- | --- |
| cpp | 7 |
| python | 124 |
| sql-or-text | 2 |

## Pattern Coverage

| Pattern | Problems |
| --- | --- |
| arrays-and-strings | 34 |
| dynamic-programming | 2 |
| hashing-and-counting | 5 |
| linked-list | 2 |
| math-and-digits | 49 |
| sql | 2 |
| stack | 3 |
| tree-and-graph | 1 |
| two-pointers | 2 |
| uncategorized | 28 |

## Weakness Signals

- 26 public solved problems are not yet represented by local source folders.
- 123 of 128 problem READMEs still need real reflection.
- 9 submissions have unknown or missing status metadata.
- No failed attempts are preserved yet, so the repo cannot fully show the early struggle-to-improvement arc.
- No TypeScript solutions are present yet; future JS/TS learning should be visible as a new track.
- Tree/graph/DP coverage is thin relative to array, string, math, and simple loop problems.

## Cleanup Order

1. Keep the repo private while cleanup is in progress.
2. Add honest public framing to the README: Adrian owns the learning; Morrow assists with review, notes, reports, and curation.
3. Run the extension's Collect Submission History flow until the local source archive catches up with the public solved count.
4. Fill reflections for the first 15-20 representative problems before touching every file.
5. Start preserving failed attempts under `attempts/` for new work. Backfill old failed attempts only when real source exists.
6. Add a TypeScript track after the exam instead of pretending it already exists.
7. Publish only after the README, reports, and representative reflections make the learning arc clear.

## Public Safety Scan

- Possible copied problem-statement flags: 0
- Possible sensitive-material flags: 0

The scan is heuristic. Review flagged files manually before making the repository public.

## First Reflection Batch

| Problem | Status | Needs |
| --- | --- | --- |
| [0002-add-two-numbers](../submissions/0002-add-two-numbers/) | Accepted | key idea, complexity, 3 TODO |
| [0003-longest-substring-without-repeating-characters](../submissions/0003-longest-substring-without-repeating-characters/) | Unknown (legacy visible-page capture before status fix; verify in LeetCode) | key idea, complexity, 3 TODO |
| [0004-median-of-two-sorted-arrays](../submissions/0004-median-of-two-sorted-arrays/) | Unknown (legacy visible-page capture before status fix; verify in LeetCode) | key idea, complexity, 3 TODO |
| [0005-longest-palindromic-substring](../submissions/0005-longest-palindromic-substring/) | Unknown (legacy visible-page capture before status fix; verify in LeetCode) | key idea, complexity, 3 TODO |
| [0006-zigzag-conversion](../submissions/0006-zigzag-conversion/) | Accepted | key idea, complexity, 5 TODO |
| [0007-reverse-integer](../submissions/0007-reverse-integer/) | Accepted | key idea, complexity, 3 TODO |
| [0009-palindrome-number](../submissions/0009-palindrome-number/) | Accepted | key idea, complexity, 5 TODO |
| [0011-container-with-most-water](../submissions/0011-container-with-most-water/) | Accepted | key idea, complexity, 5 TODO |
| [0012-integer-to-roman](../submissions/0012-integer-to-roman/) | Accepted | key idea, complexity, 3 TODO |
| [0013-roman-to-integer](../submissions/0013-roman-to-integer/) | Accepted | key idea, complexity, 3 TODO |
| [0014-longest-common-prefix](../submissions/0014-longest-common-prefix/) | Accepted | key idea, complexity, 3 TODO |
| [0021-merge-two-sorted-lists](../submissions/0021-merge-two-sorted-lists/) | Accepted | key idea, complexity, 5 TODO |
| [0026-remove-duplicates-from-sorted-array](../submissions/0026-remove-duplicates-from-sorted-array/) | Accepted | key idea, complexity, 5 TODO |
| [0028-find-the-index-of-the-first-occurrence-in-a-string](../submissions/0028-find-the-index-of-the-first-occurrence-in-a-string/) | Accepted | key idea, complexity, 5 TODO |
| [0029-divide-two-integers](../submissions/0029-divide-two-integers/) | Accepted | key idea, complexity, 3 TODO |
| [0060-permutation-sequence](../submissions/0060-permutation-sequence/) | Accepted | key idea, complexity, 3 TODO |
| [0066-plus-one](../submissions/0066-plus-one/) | Accepted | key idea, complexity, 5 TODO |
| [0069-sqrtx](../submissions/0069-sqrtx/) | Accepted | key idea, complexity, 5 TODO |
| [0083-remove-duplicates-from-sorted-list](../submissions/0083-remove-duplicates-from-sorted-list/) | Accepted | key idea, complexity, 5 TODO |
| [0118-pascals-triangle](../submissions/0118-pascals-triangle/) | Accepted | key idea, complexity, 3 TODO |

## AI-Assisted Disclosure Draft

> This repository is Adrian's LeetCode learning archive. Solutions are Adrian's attempts unless a file says otherwise. Reflection notes, reports, cleanup, and repo organization are AI-assisted with Morrow, Adrian's local AI collaborator.
