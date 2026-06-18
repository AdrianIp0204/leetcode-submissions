# Find the Number of Good Pairs I

- LeetCode: https://leetcode.com/problems/find-the-number-of-good-pairs-i/
- Language: python3
- Exported at: 2026-06-15T14:48:08.256Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Hash Table
- Runtime: 3
- Memory: 19244000
- Submitted at: 2026-06-15T14:48:05.000Z
- Submission ID: 2034059038

## Pattern

Pair enumeration

## Key Idea

For each pair, test whether the first value is divisible by the second value multiplied by `k`.

## Mistake / Edge Case

Use `m * k` as the divisor; checking against `m` alone changes the condition.

## Complexity

- Time: O(nm)
- Space: O(1)
