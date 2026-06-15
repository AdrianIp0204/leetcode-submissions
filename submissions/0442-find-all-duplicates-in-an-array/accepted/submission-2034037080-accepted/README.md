# Find All Duplicates in an Array

- LeetCode: https://leetcode.com/problems/find-all-duplicates-in-an-array/
- Language: python3
- Exported at: 2026-06-15T14:26:57.996Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Array, Hash Table, Sorting
- Runtime: 21
- Memory: 35512000
- Submitted at: 2026-06-15T14:26:58.000Z
- Submission ID: 2034037080

## Pattern

Frequency counting

## Key Idea

Count each value and return the values whose count is exactly two.

## Mistake / Edge Case

The submitted approach uses extra hash-table space instead of the in-place marking trick.

## Complexity

- Time: O(n)
- Space: O(n)
