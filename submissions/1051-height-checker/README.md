# Height Checker

- LeetCode: https://leetcode.com/problems/height-checker/
- Language: python3
- Exported at: 2026-06-04T08:39:28.362Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-06-04T08:39:26.000Z
- Submission ID: 2022085153

## Pattern

Sort and compare.

## Key Idea

The solution copies the original order, sorts the heights, and counts positions where the sorted order differs from the original. Those positions are exactly the students not standing where they would be in nondecreasing order. This is the straightforward baseline.

## Mistake / Edge Case

The original order must be saved before sorting because `heights.sort()` mutates the list. Equal heights are fine because sorting keeps the target multiset order.

## Complexity

- Time: O(n log n)
- Space: O(n)

## What Adrian Should Remember

When comparing current order with sorted order, copy before mutating.
