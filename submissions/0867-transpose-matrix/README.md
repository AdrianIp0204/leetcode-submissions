# Transpose Matrix

- LeetCode: https://leetcode.com/problems/transpose-matrix/
- Language: python3
- Exported at: 2026-06-12T06:49:48.873Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Matrix, Simulation
- Memory: 19904000
- Submitted at: 2026-06-12T06:49:44.000Z
- Submission ID: 2030496369

## Pattern

matrix index swap.

## Key Idea

Build each output row from a fixed original column: output cell `[i][j]` equals input cell `[j][i]`.

## Mistake / Edge Case

The matrix can be rectangular, so output dimensions are `cols x rows`, not always square.

## Complexity

- Time: O(rows * cols)
- Space: O(rows * cols) for the returned matrix

## What Adrian Should Remember

For transpose, outer-loop columns and inner-loop rows to make the new rows.
