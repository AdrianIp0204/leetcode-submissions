# Fibonacci Number

- LeetCode: https://leetcode.com/problems/fibonacci-number/
- Language: python3
- Exported at: 2026-06-11T11:46:30.605Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math, Dynamic Programming, Recursion, Memoization
- Runtime: 47
- Memory: 19404000
- Submitted at: 2026-06-11T11:46:25.000Z
- Submission ID: 2029689794

## Pattern

memoized recurrence.

## Key Idea

The Fibonacci recurrence is `fib(k) = fib(k - 1) + fib(k - 2)` with base values `0` and `1`. Caching makes the recursive definition linear.

## Mistake / Edge Case

`n < 2` must return `n`, otherwise `fib(0)` and `fib(1)` recurse incorrectly.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

Memoization turns an exponential recursive tree into one result per state.
