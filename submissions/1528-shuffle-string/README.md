# Shuffle String

- LeetCode: https://leetcode.com/problems/shuffle-string/
- Language: python3
- Exported at: 2026-06-08T04:31:21.393Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, String
- Memory: 19168000
- Submitted at: 2026-06-08T01:25:56.000Z
- Submission ID: 2025810342

## Pattern

Index-placement reconstruction.

## Key Idea

Create an empty result array with the same length as the string. For each character and target index, place the character directly into its final position. Joining the result array gives the restored string.

## Mistake / Edge Case

The indices describe target positions, not source positions to read from.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

When every item comes with its final index, assign directly instead of searching.
