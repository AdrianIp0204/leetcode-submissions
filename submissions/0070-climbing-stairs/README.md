# Climbing Stairs

- LeetCode: https://leetcode.com/problems/climbing-stairs/
- Language: python3
- Exported at: 2026-06-11T11:37:29.944Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math, Dynamic Programming, Memoization
- Memory: 19436000
- Submitted at: 2026-06-11T11:37:23.000Z
- Submission ID: 2029682246

## Pattern

dynamic programming / Fibonacci recurrence.

## Key Idea

The number of ways to reach step `k` is the sum of the ways to reach `k - 1` and `k - 2`. Memoization keeps each subproblem from being recomputed.

## Mistake / Edge Case

The base cases are `1 -> 1` and `2 -> 2`; without them the recurrence has nothing stable to build on.

## Complexity

- Time: O(n)
- Space: O(n) for the cache and recursion stack

## What Adrian Should Remember

When each move comes from one or two steps back, write the recurrence first; it is Fibonacci in disguise.
