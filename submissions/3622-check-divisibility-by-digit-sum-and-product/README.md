# Check Divisibility by Digit Sum and Product

- LeetCode: https://leetcode.com/problems/check-divisibility-by-digit-sum-and-product/
- Language: python3
- Exported at: 2026-06-07T07:56:29.356Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math
- Memory: 19320000
- Submitted at: 2026-06-06T09:44:33.000Z
- Submission ID: 2024087070

## Pattern

Digit aggregate divisibility.

## Key Idea

Extract each digit of `n`, adding it to a digit sum and multiplying it into a digit product. Then check whether the original number is divisible by the sum plus product. Keeping a copy of `n` preserves the original value while digits are consumed.

## Mistake / Edge Case

Use a separate variable for digit extraction so the original number is still available for the final modulo check.

## Complexity

- Time: O(d)
- Space: O(1)

## What Adrian Should Remember

When digit extraction mutates the number, save the original before the loop.
