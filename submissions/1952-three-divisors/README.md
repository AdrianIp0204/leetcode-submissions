# Three Divisors

- LeetCode: https://leetcode.com/problems/three-divisors/
- Language: python3
- Exported at: 2026-06-12T09:03:49.071Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math, Enumeration, Number Theory
- Memory: 19544000
- Submitted at: 2026-06-12T09:03:47.000Z
- Submission ID: 2030618091

## Pattern

perfect square of a prime.

## Key Idea

A number has exactly three divisors only when it is the square of a prime: `1`, the prime square root, and itself.

## Mistake / Edge Case

Non-squares cannot have exactly three divisors, and `1`, `2`, `3` are too small.

## Complexity

- Time: O(sqrt(sqrt(n))) in this implementation's primality check
- Space: O(1)

## What Adrian Should Remember

Exactly three divisors means square of a prime, not just any square.
