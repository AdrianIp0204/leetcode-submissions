# Minimum Operations to Make Array Sum Divisible by K

- LeetCode: https://leetcode.com/problems/minimum-operations-to-make-array-sum-divisible-by-k/
- Language: python3
- Exported at: 2026-06-07T07:56:27.721Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Math
- Memory: 19256000
- Submitted at: 2026-06-07T01:33:29.000Z
- Submission ID: 2024816870

## Pattern

Modulo remainder.

## Key Idea

The sum's remainder modulo `k` is exactly how much must be removed through unit decrements to reach a divisible total. Returning `sum(nums) % k` gives the minimum number of operations. No per-element choice matters for this version.

## Mistake / Edge Case

A zero remainder means the array sum is already divisible and needs zero operations.

## Complexity

- Time: O(n)
- Space: O(1)

## What Adrian Should Remember

For divisibility by decrements, the remainder often is the answer.
