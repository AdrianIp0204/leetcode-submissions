# Count Digit Appearances

- LeetCode: https://leetcode.com/problems/count-digit-appearances/
- Language: python3
- Exported at: 2026-06-13T11:04:10.620Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Array, Math
- Runtime: 24
- Memory: 19460000
- Submitted at: 2026-06-13T11:04:07.000Z
- Submission ID: 2031696096

## Pattern

digit scan per number.

## Key Idea

For every number, peel off decimal digits with `% 10` and count digits equal to `d`.

## Mistake / Edge Case

This accepted loop does not count the digit `0` inside the number `0`; that is fine if constraints avoid zero, but worth noticing for digit-count variants.

## Complexity

- Time: O(total digits)
- Space: O(1)

## What Adrian Should Remember

Digit appearance tasks usually become repeated modulo/division loops.
