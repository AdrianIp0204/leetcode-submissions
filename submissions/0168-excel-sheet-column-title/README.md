# Excel Sheet Column Title

- LeetCode: https://leetcode.com/problems/excel-sheet-column-title/
- Language: python3
- Exported at: 2026-06-11T08:13:41.347Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math, String
- Memory: 19396000
- Submitted at: 2026-06-11T08:13:36.000Z
- Submission ID: 2029487504

## Pattern

1-indexed base-26 conversion.

## Key Idea

Excel columns are like base 26 without a zero digit. Treat a remainder of 0 as `Z`, subtract that digit value, and continue dividing by 26.

## Mistake / Edge Case

Multiples of 26 are the trap: `26` maps to `Z`, not to an empty digit after remainder zero.

## Complexity

- Time: O(log_26 n)
- Space: O(log_26 n)

## What Adrian Should Remember

For alphabet columns, convert with a 1-indexed base; handle zero remainder as the last digit.
