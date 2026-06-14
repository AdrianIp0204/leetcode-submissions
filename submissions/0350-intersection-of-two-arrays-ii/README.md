# Intersection of Two Arrays II

- LeetCode: https://leetcode.com/problems/intersection-of-two-arrays-ii/
- Language: python3
- Exported at: 2026-06-13T04:38:47.199Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Hash Table, Two Pointers, Binary Search, Sorting
- Memory: 19128000
- Submitted at: 2026-06-13T04:38:42.000Z
- Submission ID: 2031353011

## Pattern

counting multiplicities.

## Key Idea

Count both arrays, then emit each shared value as many times as the smaller count allows.

## Mistake / Edge Case

This is multiset intersection, not set intersection; duplicates must appear in the answer the correct number of times.

## Complexity

- Time: O(n + m + u)
- Space: O(u + v)

## What Adrian Should Remember

If duplicates matter, store counts, not just membership.
