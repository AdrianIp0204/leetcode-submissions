# Two Sum II - Input Array Is Sorted

- LeetCode: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
- Language: python3
- Exported at: 2026-06-11T04:35:11.305Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Array, Two Pointers, Binary Search
- Runtime: 2
- Memory: 20484000
- Submitted at: 2026-06-11T04:35:07.000Z
- Submission ID: 2029260163

## Pattern

two pointers on sorted array.

## Key Idea

Use the smallest and largest remaining numbers. If their sum is too small, only moving the left pointer can increase it; if too large, only moving the right pointer can decrease it.

## Mistake / Edge Case

The answer is 1-indexed, so return `left + 1` and `right + 1` instead of Python indexes.

## Complexity

- Time: O(n)
- Space: O(1)

## What Adrian Should Remember

Sorted arrays often let you replace a hash map with two pointers and a monotonic decision.
