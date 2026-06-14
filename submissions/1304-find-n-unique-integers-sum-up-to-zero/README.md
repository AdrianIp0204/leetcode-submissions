# Find N Unique Integers Sum up to Zero

- LeetCode: https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/
- Language: python3
- Exported at: 2026-06-08T04:31:25.462Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Math
- Memory: 19320000
- Submitted at: 2026-06-07T09:39:30.000Z
- Submission ID: 2025217054

## Pattern

Symmetric pair construction.

## Key Idea

The solution adds pairs `i` and `-i`, which cancel each other to zero. If `n` is odd, it also adds `0` as the middle value. This guarantees uniqueness and makes the total sum zero by construction.

## Mistake / Edge Case

Odd `n` needs the extra zero; even `n` does not. The loop count should create exactly `n // 2` positive-negative pairs.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

When a sum must be zero, build canceling pairs instead of searching for numbers.
