# Count Pairs Whose Sum is Less than Target

- LeetCode: https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/
- Language: python3
- Exported at: 2026-06-14T13:19:50.782Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Two Pointers, Binary Search, Sorting
- Memory: 19108000
- Submitted at: 2026-06-14T13:19:47.000Z
- Submission ID: 2032846576

## Pattern

Sorting and two pointers

## Key Idea

After sorting, if the smallest current value plus largest current value is below target, count all pairs using that smallest value at once.

## Mistake / Edge Case

TODO

## Complexity

- Time: O(n log n)
- Space: O(1) extra, ignoring sort internals
