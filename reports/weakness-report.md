# Weakness Report

- Generated at: 2026-06-09T13:07:30.638Z
- Problems audited: 154

## Current Diagnosis

- Reflection debt is the largest public-readiness issue: 74 problem READMEs still need filled Key Idea and Complexity sections.
- Status metadata still needs cleanup for 6 older submissions.
- Failed attempts preserved in repo: no. This weakens the learning-story side of the portfolio.
- TypeScript track present: no. This should begin after the exam as part of learning JS/TS for Morrow/Core work.

## Weak Pattern Areas

| Area | Current Count | Action |
| --- | --- | --- |
| Linked list pointer work | 2 | Do list problems slowly and draw pointer movement before coding. |
| Stack and monotonic stack | 3 | Move from simple stack simulation into next-greater-element style problems. |
| Binary search invariants | 0 | Practice writing the loop condition and boundary meaning before the code. |
| Tree and graph traversal | 1 | Build DFS/BFS muscle after arrays and strings feel less shaky. |
| Dynamic programming | 2 | Delay harder DP until recurrence writing is deliberate, not guessed. |

## What Adrian Should Learn Next

1. JavaScript fundamentals through LeetCode-sized functions: arrays, objects, `Map`, `Set`, strings, sorting, and loops.
2. TypeScript basics after JS syntax feels less annoying: function signatures, array/object types, unions, and type narrowing.
3. Pattern vocabulary: hash map, two pointers, stack, linked list, binary search, DFS/BFS, and prefix/suffix arrays.
4. Testing habit: write tiny local cases before trusting a solution, especially for edge cases.
5. Reflection habit: after every accepted solution, write the invariant or trick in two to five sentences.

## Next Problem Priorities

1. 206. Reverse Linked List - pointer rewiring.
2. 21. Merge Two Sorted Lists - list merge discipline.
3. 49. Group Anagrams - canonical hash key design.
4. 238. Product of Array Except Self - prefix/suffix invariants.
5. 128. Longest Consecutive Sequence - avoid repeated work with set starts.
6. 15. 3Sum - duplicate control and two pointers.
7. 424. Longest Repeating Character Replacement - sliding-window invariant.
8. 739. Daily Temperatures - monotonic stack.
9. 33. Search in Rotated Sorted Array - binary-search boundaries.
10. 200. Number of Islands - grid DFS/BFS.

## What To Avoid While Coding

- Do not optimize the README while avoiding the actual hard problem.
- Do not rewrite old weak solutions to look smarter without preserving the original learning trace.
- Do not paste full LeetCode problem statements into the repo.
- Do not accept AI notes blindly; read them and mark anything that does not match your real understanding.
- Do not solve by random nested loops first unless the problem is tiny and brute force is the explicit baseline.
- Do not move to many new languages at once. Python stays useful; JS/TS becomes the deliberate second track.

## Morrow's Role

Morrow should generate notes, audit reports, cleanup plans, and review questions, but the repo should still make Adrian's actual attempts visible. The point is not to pretend there was no AI help; the point is to make the help honest and useful.
