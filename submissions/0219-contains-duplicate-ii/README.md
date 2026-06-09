# Contains Duplicate II

- LeetCode: https://leetcode.com/problems/contains-duplicate-ii/
- Language: python3
- Exported at: 2026-06-08T06:12:36.597Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Hash Table, Sliding Window
- Runtime: 35
- Memory: 36596000
- Submitted at: 2026-06-08T04:41:14.000Z
- Submission ID: 2025916779

## Pattern

Hash map of latest index.

## Key Idea

The solution stores the most recent index where each value appeared. When the same value appears again, it checks whether the distance from the stored index is at most `k`; if not, it updates the index to the newer occurrence. Keeping only the latest index is enough because it gives the closest possible previous duplicate.

## Mistake / Edge Case

The check must happen before overwriting the stored index. If `k` is zero, no two distinct indices can be close enough, and the loop correctly returns `False`.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

For "nearby duplicate", store the latest position, not a full list of positions.
