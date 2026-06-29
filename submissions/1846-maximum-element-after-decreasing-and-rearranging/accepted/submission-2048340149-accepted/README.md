# Maximum Element After Decreasing and Rearranging

- LeetCode: https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/
- Language: python3
- Exported at: 2026-06-28T01:40:09.443Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Array, Greedy, Sorting
- Runtime: 35
- Memory: 28204000
- Submitted at: 2026-06-28T01:40:06.000Z
- Submission ID: 2048340149

## Pattern

Greedy counting / capped frequency buckets

## Key Idea

Values larger than `n` can be treated as `n`, because the final maximum cannot exceed the array length. Count each capped value, then scan upward while keeping the largest reachable valid value no more than both the current index and one more than the previous reachable value per available element.

## Mistake / Edge Case

TODO

## Complexity

- Time: O(n)
- Space: O(n)
