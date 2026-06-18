# Transform Array by Parity

- LeetCode: https://leetcode.com/problems/transform-array-by-parity/
- Language: python3
- Exported at: 2026-06-15T14:45:29.061Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Sorting, Counting
- Memory: 19348000
- Submitted at: 2026-06-15T14:45:26.000Z
- Submission ID: 2034056152

## Pattern

Parity partitioning

## Key Idea

Map even values to `0` and odd values to `1`, placing zeros at the front and ones at the back.

## Mistake / Edge Case

Only parity matters; the original numeric values are discarded.

## Complexity

- Time: O(n)
- Space: O(n)
