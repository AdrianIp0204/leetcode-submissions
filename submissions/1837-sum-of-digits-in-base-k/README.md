# Sum of Digits in Base K

- LeetCode: https://leetcode.com/problems/sum-of-digits-in-base-k/
- Language: python3
- Exported at: 2026-06-05T14:09:58.478Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math
- Memory: 19276000
- Submitted at: 2026-06-03T13:18:52.000Z
- Submission ID: 2021271680

## Pattern

Base conversion by repeated division.

## Key Idea

Repeatedly take `n % k` to get the next base-k digit and add it to the sum. Then divide `n` by `k` to move to the next digit. The loop ends when all digits have been consumed.

## Mistake / Edge Case

Use integer division after taking the remainder; reversing that order would lose the current digit.

## Complexity

- Time: O(log_k n)
- Space: O(1)

## What Adrian Should Remember

Digit extraction in any base is remainder, then integer division.
