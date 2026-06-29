# 4Sum

- LeetCode: https://leetcode.com/problems/4sum/
- Language: python3
- Exported at: 2026-06-29T09:53:31.747Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Array, Two Pointers, Sorting
- Runtime: 394
- Memory: 19320000
- Submitted at: 2026-06-29T09:53:24.000Z
- Submission ID: 2049895285

## Pattern

sorting + fixed indices + two pointers

## Key Idea

Sort the array, fix the first two values, then use a left/right pointer search for the remaining pair while skipping duplicates.

## Mistake / Edge Case

Handles arrays shorter than four and skips repeated values at `i`, `j`, `left`, and `right` to avoid duplicate quadruplets.

## Complexity

- Time: O(n^3)
- Space: O(1) extra, ignoring output and sort internals
