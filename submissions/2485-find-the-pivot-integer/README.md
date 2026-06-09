# Find the Pivot Integer

- LeetCode: https://leetcode.com/problems/find-the-pivot-integer/
- Language: python3
- Exported at: 2026-06-02T11:30:20.463Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-05-29T10:14:43.000Z
- Submission ID: 2016319013

## Pattern

Arithmetic-series balance.

## Key Idea

A pivot integer has equal sums on the left-inclusive and right-inclusive sides. The code tests each candidate using arithmetic-series formulas instead of summing ranges repeatedly. Returning the first match is enough because there can be at most one pivot.

## Mistake / Edge Case

Both sides include the pivot value, so the formulas must include `i` in each sum.

## Complexity

- Time: O(n)
- Space: O(1)

## What Adrian Should Remember

When range sums appear inside a loop, replace the repeated sum with a formula or prefix sum.
