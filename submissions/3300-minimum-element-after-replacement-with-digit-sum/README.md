# Minimum Element After Replacement With Digit Sum

- LeetCode: https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/
- Language: python3
- Exported at: 2026-06-13T04:23:46.285Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Math
- Runtime: 3
- Memory: 19484000
- Submitted at: 2026-06-13T04:23:40.000Z
- Submission ID: 2031341899

## Pattern

digit sum scan.

## Key Idea

For each number, compute its digit sum by repeated `% 10` and `// 10`, then track the minimum digit sum.

## Mistake / Edge Case

The answer is the minimum replacement value, not the original smallest number.

## Complexity

- Time: O(total digits)
- Space: O(1)

## What Adrian Should Remember

Digit replacement problems usually need per-number digit loops, then a separate aggregate.
