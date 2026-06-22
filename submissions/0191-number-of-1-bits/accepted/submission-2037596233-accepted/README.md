# Number of 1 Bits

- LeetCode: https://leetcode.com/problems/number-of-1-bits/
- Language: python3
- Exported at: 2026-06-18T13:13:20.506Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Divide and Conquer, Bit Manipulation
- Memory: 19420000
- Submitted at: 2026-06-18T13:13:17.000Z
- Submission ID: 2037596233

## Pattern

Bit counting

## Key Idea

Convert the integer to its binary representation and count the `1` digits.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: zero has no set bits.

## Complexity

- Time: O(b), where b is the number of bits in `n`
- Space: O(b) for the formatted binary string
