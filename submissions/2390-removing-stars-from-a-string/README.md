# Removing Stars From a String

- LeetCode: https://leetcode.com/problems/removing-stars-from-a-string/
- Language: python3
- Exported at: 2026-06-11T15:51:27.377Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: String, Stack, Simulation
- Runtime: 81
- Memory: 20472000
- Submitted at: 2026-06-11T15:51:22.000Z
- Submission ID: 2029912233

## Pattern

stack simulation.

## Key Idea

Append normal characters to a stack. When a star appears, pop the previous kept character.

## Mistake / Edge Case

The problem guarantees each star has a removable previous character, so `pop` is valid.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

If each marker removes the nearest previous kept item, it is a stack problem.
