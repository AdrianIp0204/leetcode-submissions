# Kth Largest Element in an Array

- LeetCode: https://leetcode.com/problems/kth-largest-element-in-an-array/
- Language: python3
- Exported at: 2026-06-26T04:31:57.521Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Array, Divide and Conquer, Sorting, Heap (Priority Queue), Quickselect
- Runtime: 153
- Memory: 34424000
- Submitted at: 2026-06-26T04:31:55.000Z
- Submission ID: 2046380966

## Pattern

Heap / selection helper

## Key Idea

Use `heapq.nlargest(k, nums)` to keep the `k` largest values, then return the
last value from that ordered selection.

## Mistake / Edge Case

Duplicates still count as separate elements in the ordering; the heap helper
preserves that behavior.

## Complexity

- Time: O(n log k)
- Space: O(k)
