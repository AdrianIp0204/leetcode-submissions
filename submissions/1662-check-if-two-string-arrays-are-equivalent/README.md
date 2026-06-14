# Check If Two String Arrays are Equivalent

- LeetCode: https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
- Language: python3
- Exported at: 2026-06-05T14:09:37.896Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, String
- Memory: 19240000
- Submitted at: 2026-06-05T13:08:00.000Z
- Submission ID: 2023295269

## Pattern

Join and compare.

## Key Idea

Concatenate each array of string chunks into one full string, then compare the two results. The ternary expression is unnecessary because the comparison already returns a boolean. The core idea is correct and direct for the problem constraints.

## Mistake / Edge Case

Chunk boundaries do not matter; only the final concatenated strings matter.

## Complexity

- Time: O(n + m), total characters across both arrays
- Space: O(n + m), for the joined strings

## What Adrian Should Remember

If boundaries are irrelevant, normalize both inputs into the same representation before comparing.
