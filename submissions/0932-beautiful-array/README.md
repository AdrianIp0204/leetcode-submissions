# Beautiful Array

- LeetCode: https://leetcode.com/problems/beautiful-array/
- Language: python3
- Exported at: 2026-06-12T06:13:20.222Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Array, Math, Divide and Conquer
- Memory: 19224000
- Submitted at: 2026-06-12T06:13:15.000Z
- Submission ID: 2030452592

## Pattern

divide and conquer parity construction.

## Key Idea

A beautiful array stays beautiful when transformed by `2*x - 1` and `2*x`. Put all generated odds before evens, then trim values above `n`.

## Mistake / Edge Case

The construction may temporarily include values larger than `n`; filtering at the end of each expansion target keeps only valid labels.

## Complexity

- Time: O(n log n) for repeated expansions and filtering
- Space: O(n)

## What Adrian Should Remember

For no-average constraints, separate parity: an average of one odd and one even is not an integer, and recursive halves preserve the property.
