# Largest Positive Integer That Exists With Its Negative

- LeetCode: https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/
- Language: python3
- Exported at: 2026-06-14T13:38:39.444Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Hash Table, Two Pointers, Sorting
- Runtime: 15
- Memory: 19396000
- Submitted at: 2026-06-14T13:38:36.000Z
- Submission ID: 2032862127

## Pattern

Sorting with membership check

## Key Idea

Sort descending and return the first positive value whose negative is also present.

## Mistake / Edge Case

TODO

## Complexity

- Time: O(n log n + n^2) with list membership checks
- Space: O(1) extra, ignoring sort internals
