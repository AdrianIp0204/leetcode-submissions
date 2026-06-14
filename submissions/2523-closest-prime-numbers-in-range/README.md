# Closest Prime Numbers in Range

- LeetCode: https://leetcode.com/problems/closest-prime-numbers-in-range/
- Language: python3
- Exported at: 2026-06-05T14:10:04.418Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Math, Number Theory
- Runtime: 7
- Memory: 19308000
- Submitted at: 2026-06-03T10:31:35.000Z
- Submission ID: 2021138173

## Pattern

Number theory scan / primality testing.

## Key Idea

Skip even numbers after handling the special pair `[2, 3]`, test each odd candidate for primality, and compare each prime with the previous prime found. The moment the gap is 2, it is the smallest possible gap between odd primes, so the answer can return early. This is a direct primality-test approach rather than a sieve.

## Mistake / Edge Case

The special case for `[2, 3]` matters because the later loop skips even values and only scans odd candidates. For wider ranges, repeated trial division can be slower than building a sieve once.

## Complexity

- Time: O((right - left) * sqrt(right)) in the worst case
- Space: O(1)

## What Adrian Should Remember

Use parity and early exits for simple prime scans, but switch to a sieve when the range is large enough.
