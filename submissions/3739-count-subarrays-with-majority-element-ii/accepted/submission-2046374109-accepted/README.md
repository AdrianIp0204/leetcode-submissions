# Count Subarrays With Majority Element II

- LeetCode: https://leetcode.com/problems/count-subarrays-with-majority-element-ii/
- Language: python3
- Exported at: 2026-06-26T04:22:23.705Z
- Submission status seen by extension: Accepted
- Difficulty: Hard
- Tags: Array, Hash Table, Divide and Conquer, Segment Tree, Merge Sort, Prefix Sum
- Runtime: 55
- Memory: 33768000
- Submitted at: 2026-06-26T04:22:23.000Z
- Submission ID: 2046374109

## Pattern

Prefix balance / online frequency counting

## Key Idea

Treat `target` as `+1` and every other value as `-1`; a subarray has target as
the majority exactly when its balance is positive. Count prior prefix balances
that are smaller than the current balance.

## Mistake / Edge Case

The prefix balance can be negative, so the implementation offsets it by `n`
before using it as a list index.

## Complexity

- Time: O(n)
- Space: O(n)
