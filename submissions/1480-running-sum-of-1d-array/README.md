# Running Sum of 1d Array

- LeetCode: https://leetcode.com/problems/running-sum-of-1d-array/
- Language: python3
- Exported at: 2026-06-05T14:09:40.115Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Prefix Sum
- Memory: 19488000
- Submitted at: 2026-06-05T12:47:26.000Z
- Submission ID: 2023280507

## Pattern

Prefix sum.

## Key Idea

Keep a cumulative total while scanning the array from left to right. After adding the current number, append the cumulative total to the result. This records the prefix sum ending at each index.

## Mistake / Edge Case

Append after adding the current value, otherwise the result is shifted by one position.

## Complexity

- Time: O(n)
- Space: O(n), for the returned list

## What Adrian Should Remember

Prefix sums are just a running invariant: the variable should equal the sum up to the current index.
