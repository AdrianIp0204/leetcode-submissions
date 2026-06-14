# Array Partition

- LeetCode: https://leetcode.com/problems/array-partition/
- Language: python3
- Exported at: 2026-06-12T05:22:35.739Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Greedy, Sorting, Counting Sort
- Runtime: 27
- Memory: 21440000
- Submitted at: 2026-06-12T05:22:32.000Z
- Submission ID: 2030398414

## Pattern

greedy sorting.

## Key Idea

Sort numbers and pair adjacent values. Taking every even-indexed value in sorted order maximizes the sum of pair minimums.

## Mistake / Edge Case

Pairing a small number with a very large number wastes that large number because only the minimum counts.

## Complexity

- Time: O(n log n)
- Space: O(1) extra, ignoring sort details

## What Adrian Should Remember

To maximize sum of pair minimums, keep small values paired together so large values are not hidden as partners.
