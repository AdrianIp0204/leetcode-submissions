# Find Occurrences of an Element in an Array

- LeetCode: https://leetcode.com/problems/find-occurrences-of-an-element-in-an-array/
- Language: python3
- Exported at: 2026-06-18T03:18:13.886Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Array, Hash Table
- Runtime: 49
- Memory: 36392000
- Submitted at: 2026-06-18T03:18:08.000Z
- Submission ID: 2036975631

## Pattern

Occurrence index precomputation

## Key Idea

Collect all indices where `nums[i] == x`, then answer each 1-indexed occurrence
query by indexing into that collected list when possible.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: a query larger than the occurrence
count returns `-1`.

## Complexity

- Time: O(n + q)
- Space: O(k + q), where k is the number of occurrences of `x`
