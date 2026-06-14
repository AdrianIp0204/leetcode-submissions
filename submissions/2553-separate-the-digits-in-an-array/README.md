# Separate the Digits in an Array

- LeetCode: https://leetcode.com/problems/separate-the-digits-in-an-array/
- Language: python3
- Exported at: 2026-06-08T04:31:24.438Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Simulation
- Runtime: 3
- Memory: 19560000
- Submitted at: 2026-06-07T09:55:00.000Z
- Submission ID: 2025228490

## Pattern

Digit extraction with order restore.

## Key Idea

For each number, extract digits from right to left using modulo and division, then reverse those extracted digits before appending them. Single-digit numbers can be appended as-is. This preserves the original left-to-right digit order in the final array.

## Mistake / Edge Case

Modulo extraction gives digits backwards, so reverse the temporary list before extending the result.

## Complexity

- Time: O(total digits)
- Space: O(total digits)

## What Adrian Should Remember

If you extract digits numerically, check whether the natural extraction order matches the output order.
