# Difference Between Element Sum and Digit Sum of an Array

- LeetCode: https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/
- Language: python3
- Exported at: 2026-06-02T11:30:04.899Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-06-02T09:26:59.000Z
- Submission ID: 2020010716

## Pattern

Digit expansion.

## Key Idea

Compute the normal element sum, then build a list of every decimal digit across the numbers. The absolute difference between the element sum and digit sum is the answer. Single-digit numbers can be added directly to the digit list.

## Mistake / Edge Case

For multi-digit numbers, split into characters and convert each digit back to an integer before summing.

## Complexity

- Time: O(total digits)
- Space: O(total digits)

## What Adrian Should Remember

Digit-sum problems become simple once numbers are expanded into their decimal digits.
