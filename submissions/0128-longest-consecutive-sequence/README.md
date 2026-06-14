# Longest Consecutive Sequence

- LeetCode: https://leetcode.com/problems/longest-consecutive-sequence/
- Language: python3
- Exported at: 2026-06-06T05:34:23.894Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Array, Hash Table, Union-Find
- Runtime: 52
- Memory: 28652000
- Submitted at: 2026-06-06T05:18:15.000Z
- Submission ID: 2023854312

## Pattern

Sorting baseline for consecutive runs.

## Key Idea

This accepted solution sorts the numbers and scans from the end, counting adjacent values that differ by 1. Duplicate values are skipped so they do not break a run. It works, but the intended optimal pattern is a set: start counting only when `num - 1` is not present.

## Mistake / Edge Case

Duplicates are the main edge case; without the equality check, a repeated number would reset the run incorrectly. This solution also mutates `nums` with `pop`, which is fine inside LeetCode but worth avoiding if the input is needed later.

## Complexity

- Time: O(n log n)
- Space: O(1) extra space if the in-place sort is counted as allowed

## What Adrian Should Remember

When a problem asks for consecutive sequences in O(n), use a set and only begin from sequence starts.
