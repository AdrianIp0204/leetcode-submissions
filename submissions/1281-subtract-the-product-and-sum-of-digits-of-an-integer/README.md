# Subtract the Product and Sum of Digits of an Integer

- LeetCode: https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
- Language: cpp
- Exported at: 2026-06-05T14:10:00.735Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math
- Memory: 7816000
- Submitted at: 2026-06-03T11:58:56.000Z
- Submission ID: 2021209090

## Pattern

Digit extraction.

## Key Idea

The C++ solution repeatedly takes the last digit with `n % 10`, adds it to the digit sum, multiplies it into the digit product, and removes it with `n /= 10`. After all digits are processed, it returns product minus sum. This is the direct arithmetic version without string conversion.

## Mistake / Edge Case

The product should start at `1`, not `0`; otherwise every multiplication stays zero. The loop assumes `n` is positive, which matches the problem constraints.

## Complexity

- Time: O(d), where `d` is the number of digits
- Space: O(1)

## What Adrian Should Remember

For digit math, initialize additive and multiplicative accumulators differently: sum at `0`, product at `1`.
