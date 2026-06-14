# Restore Finishing Order

- LeetCode: https://leetcode.com/problems/restore-finishing-order/
- Language: python3
- Exported at: 2026-06-07T07:56:24.608Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Hash Table
- Memory: 19256000
- Submitted at: 2026-06-07T03:09:06.000Z
- Submission ID: 2024903330

## Pattern

Order filter.

## Key Idea

The original order list already gives the desired relative order. Filter it to only the IDs that appear in the finished list. The list comprehension preserves the order from `order`.

## Mistake / Edge Case

The result should follow original order, not the order of the finished list.

## Complexity

- Time: O(n * m) in this implementation because list membership is linear
- Space: O(k), for the result list

## What Adrian Should Remember

When filtering by membership many times, convert the membership list to a set if constraints grow.
