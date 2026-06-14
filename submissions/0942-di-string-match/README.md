# DI String Match

- LeetCode: https://leetcode.com/problems/di-string-match/
- Language: typescript
- Exported at: 2026-06-11T06:49:47.663Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Two Pointers, String, Greedy
- Runtime: 6
- Memory: 60844000
- Submitted at: 2026-06-11T06:49:41.000Z
- Submission ID: 2029408668

## Pattern

greedy low/high assignment.

## Key Idea

For `I`, use the current lowest remaining number; for `D`, use the current highest. The final remaining number closes the permutation.

## Mistake / Edge Case

The result has length `s.length + 1`, so one number remains after processing every character.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

When only relative up/down constraints matter, spend extremes greedily.
