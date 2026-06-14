# Sqrt(x)

- LeetCode: https://leetcode.com/problems/sqrtx/
- Language: python3
- Exported at: 2026-06-07T07:56:22.499Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math, Binary Search
- Runtime: 1193
- Memory: 19340000
- Submitted at: 2026-06-07T04:01:39.000Z
- Submission ID: 2024961979

## Pattern

Linear search baseline; intended pattern is binary search.

## Key Idea

The code increments `i` until `i * i` becomes larger than `x`, then returns `i - 1`. This is easy to reason about and accepted, but it ignores the binary-search tag. A cleaner learning solution would search the integer range and keep the largest midpoint whose square is not greater than `x`.

## Mistake / Edge Case

The answer is the floor of the square root, so the loop must return the last valid `i`, not the first invalid one. `x = 0` works because the loop runs once and returns `0`.

## Complexity

- Time: O(sqrt(x))
- Space: O(1)

## What Adrian Should Remember

If the answer is a boundary value in a sorted numeric range, practice binary search instead of linear stepping.
