# Find Common Characters

- LeetCode: https://leetcode.com/problems/find-common-characters/
- Language: python3
- Exported at: 2026-06-09T03:32:14.346Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Hash Table, String
- Runtime: 11
- Memory: 19580000
- Submitted at: 2026-06-09T03:32:11.000Z
- Submission ID: 2026963926

## Pattern

Counter intersection.

## Key Idea

The solution starts with the character counts from the first word, then intersects those counts with each next word using `&`. Counter intersection keeps the minimum count for each character, which is exactly the number of times that character appears in every word. `elements()` expands the final counts back into a list.

## Mistake / Edge Case

Repeated common characters must be preserved, not just unique letters. The local archive needs `Counter` imported from `collections` to run standalone.

## Complexity

- Time: O(total characters)
- Space: O(k), where `k` is the character set size

## What Adrian Should Remember

For "common across all strings" with duplicates, intersect counts instead of intersecting sets.
