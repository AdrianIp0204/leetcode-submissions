# Weakness Report

- Generated at: 2026-10-04T05:22:27.970Z
- Problems audited: 454

## Current Diagnosis

- Reflection debt remains a public-readiness issue: 227 problem READMEs still need filled Key Idea and Complexity sections.
- Status metadata still needs cleanup for 233 older submissions.
- Failed attempts preserved in repo: yes. Keep capturing real failed attempts for new work instead of reconstructing old ones from memory.
- TypeScript track present: yes. Expand it deliberately as part of JS/TS fluency for Morrow/Core work.

## Weak Pattern Areas

| Area | Current Count | Action |
| --- | --- | --- |
| Linked list pointer work | 8 | Do list problems slowly and draw pointer movement before coding. |
| Stack and monotonic stack | 6 | Move from simple stack simulation into next-greater-element style problems. |
| Binary search invariants | 1 | Practice writing the loop condition and boundary meaning before the code. |
| Tree and graph traversal | 7 | Build DFS/BFS muscle after arrays and strings feel less shaky. |
| Dynamic programming | 2 | Delay harder DP until recurrence writing is deliberate, not guessed. |

## What Adrian Should Learn Next

1. JavaScript fundamentals through LeetCode-sized functions: arrays, objects, `Map`, `Set`, strings, sorting, and loops.
2. TypeScript basics after JS syntax feels less annoying: function signatures, array/object types, unions, and type narrowing.
3. Pattern vocabulary: hash map, two pointers, stack, linked list, binary search, DFS/BFS, and prefix/suffix arrays.
4. Testing habit: write tiny local cases before trusting a solution, especially for edge cases.
5. Reflection habit: after every accepted solution, write the invariant or trick in two to five sentences.

## Next Problem Priorities

See [Next LeetCode Problems](../notes/next-problems.md) for the snapshot date and sync warning. Regenerate that queue before this audit.

1. [424. Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) - Medium, Sliding window
   - Why: Good first serious window invariant: window size minus max frequency.
2. [739. Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) - Medium, Monotonic stack
   - Why: Important upgrade from simple stack to 'next greater' structure.
3. [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) - Medium, Binary search invariant
   - Why: Builds real binary-search boundary discipline.
4. [98. Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) - Medium, Tree recursion bounds
   - Why: Tests whether you preserve constraints through recursion.
5. [207. Course Schedule](https://leetcode.com/problems/course-schedule/) - Medium, Topological sort
   - Why: First serious directed-graph dependency problem.
6. [198. House Robber](https://leetcode.com/problems/house-robber/) - Medium, Dynamic programming
   - Why: Smallest useful DP recurrence: choose/take state compression.
7. [322. Coin Change](https://leetcode.com/problems/coin-change/) - Medium, Dynamic programming
   - Why: Good test of bottom-up recurrence and impossible states.
8. [300. Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) - Medium, DP / binary search
   - Why: A strong later target after simpler DP feels stable.

## What To Avoid While Coding

- Do not optimize the README while avoiding the actual hard problem.
- Do not rewrite old weak solutions to look smarter without preserving the original learning trace.
- Do not paste full LeetCode problem statements into the repo.
- Do not accept AI notes blindly; read them and mark anything that does not match your real understanding.
- Do not solve by random nested loops first unless the problem is tiny and brute force is the explicit baseline.
- Do not move to many new languages at once. Python stays useful; JS/TS becomes the deliberate second track.

## Morrow's Role

Morrow should generate notes, audit reports, cleanup plans, and review questions, but the repo should still make Adrian's actual attempts visible. The point is not to pretend there was no AI help; the point is to make the help honest and useful.
