# Count Equal and Divisible Pairs in an Array

- LeetCode: https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/
- Language: python3
- Exported at: 2026-06-07T07:56:21.783Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array
- Runtime: 11
- Memory: 19664000
- Submitted at: 2026-06-07T04:15:15.000Z
- Submission ID: 2024970588

## Pattern

Group equal values, then test index pairs.

## Key Idea

First group indices by their value, because only equal-value pairs can count. For each group with more than one index, test each pair and count it when the product of the indices is divisible by `k`. This avoids comparing values that can never match.

## Mistake / Edge Case

The divisibility condition applies to the index product, not the value product.

## Complexity

- Time: O(n + sum(g^2)) across equal-value groups
- Space: O(n)

## What Adrian Should Remember

Separate the equality condition from the index condition so the search space is smaller and clearer.
