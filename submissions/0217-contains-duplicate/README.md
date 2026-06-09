# Contains Duplicate

- LeetCode: https://leetcode.com/problems/contains-duplicate/
- Language: python3
- Exported at: 2026-06-05T14:09:36.670Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Hash Table, Sorting
- Runtime: 25
- Memory: 36272000
- Submitted at: 2026-06-05T13:34:37.000Z
- Submission ID: 2023314906

## Pattern

Hash map counting.

## Key Idea

The code counts how many times each number has appeared and returns as soon as any count becomes greater than one. This is the right hash-table idea, though a `set` would be slightly simpler because the actual count is not needed. Early return keeps the scan from doing extra work once a duplicate is found.

## Mistake / Edge Case

An empty or one-element list cannot have duplicates and naturally falls through to `False`. The key point is to check during the scan, not after building unnecessary full counts.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

If all you need is "seen before?", use a set unless the count itself matters.
