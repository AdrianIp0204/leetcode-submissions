# Find the Difference of Two Arrays

- LeetCode: https://leetcode.com/problems/find-the-difference-of-two-arrays/
- Language: python3
- Exported at: 2026-06-13T04:42:39.261Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Hash Table
- Runtime: 7
- Memory: 19448000
- Submitted at: 2026-06-13T04:42:34.000Z
- Submission ID: 2031356051

## Pattern

set difference.

## Key Idea

Convert both arrays to sets and return values unique to each side with `s1 - s2` and `s2 - s1`.

## Mistake / Edge Case

Duplicates do not matter because the output asks for distinct values.

## Complexity

- Time: O(n + m)
- Space: O(n + m)

## What Adrian Should Remember

When output wants distinct numbers, sets should be the first tool considered.
