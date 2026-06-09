# Divisible and Non-divisible Sums Difference

- LeetCode: https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/
- Language: python3
- Exported at: 2026-06-03T01:59:04.584Z
- Submission status seen by extension: Unknown (legacy visible-page capture before status fix; verify in LeetCode)

## Pattern

Arithmetic-series subtraction.

## Key Idea

The total sum from 1 to `n` is known by formula. The sum of multiples of `m` up to `n` is `m` times the triangular number of `floor(n/m)`. Subtracting twice the divisible sum from the total is equivalent to non-divisible sum minus divisible sum; the code's `div` variable already stores twice the multiple sum.

## Mistake / Edge Case

Be clear that `m * q * (q + 1)` is two times the multiple sum, not the multiple sum itself.

## Complexity

- Time: O(1)
- Space: O(1)

## What Adrian Should Remember

Name formula variables carefully when they include a hidden factor like the final doubled subtraction.
