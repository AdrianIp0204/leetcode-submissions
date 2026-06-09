# Smallest Number With All Set Bits

- LeetCode: https://leetcode.com/problems/smallest-number-with-all-set-bits/
- Language: python3
- Exported at: 2026-06-08T01:40:38.006Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math, Bit Manipulation
- Memory: 19316000
- Submitted at: 2026-06-08T01:39:18.000Z
- Submission ID: 2025814863

## Pattern

Next all-ones mask.

## Key Idea

A number with all set bits has the form `2^k - 1`. Find the bit length needed to cover `n`, then return the all-ones value for that length. The logarithm expression is a compact way to compute that length for these constraints.

## Mistake / Edge Case

If `n` is already all ones, the same bit length should return `n`, not the next larger mask.

## Complexity

- Time: O(1)
- Space: O(1)

## What Adrian Should Remember

All-set-bit numbers are masks; think in powers of two minus one.
