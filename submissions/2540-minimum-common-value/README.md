# Minimum Common Value

- LeetCode: https://leetcode.com/problems/minimum-common-value/
- Language: python3
- Exported at: 2026-06-13T04:30:24.869Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Hash Table, Two Pointers, Binary Search
- Runtime: 7
- Memory: 37844000
- Submitted at: 2026-06-13T04:30:18.000Z
- Submission ID: 2031346630

## Pattern

two pointers on sorted arrays.

## Key Idea

Walk both sorted arrays. Equal values give the minimum common value; otherwise advance the pointer with the smaller value.

## Mistake / Edge Case

If one pointer reaches the end, no common value exists.

## Complexity

- Time: O(n + m)
- Space: O(1)

## What Adrian Should Remember

For two sorted lists, advance the side that is currently behind.
