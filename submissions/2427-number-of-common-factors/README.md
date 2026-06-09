# Number of Common Factors

- LeetCode: https://leetcode.com/problems/number-of-common-factors/
- Language: python3
- Exported at: 2026-06-08T02:11:09.105Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math, Enumeration, Number Theory
- Memory: 19208000
- Submitted at: 2026-06-08T02:11:07.000Z
- Submission ID: 2025826690

## Pattern

GCD factor counting.

## Key Idea

Any common factor of `a` and `b` must be a factor of `gcd(a, b)`. Count divisors of that GCD by scanning up to its square root and adding paired factors. A perfect square contributes only one factor at the square root.

## Mistake / Edge Case

Handle perfect-square divisor pairs carefully so the square root is not double-counted.

## Complexity

- Time: O(sqrt(gcd(a, b)))
- Space: O(1)

## What Adrian Should Remember

Reduce common-factor problems to the GCD first, then count divisors of one number.
