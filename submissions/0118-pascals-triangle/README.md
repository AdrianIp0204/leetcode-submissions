# Pascal's Triangle

- LeetCode: https://leetcode.com/problems/pascals-triangle/
- Language: python3
- Exported at: 2026-06-02T11:30:16.364Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-05-30T03:54:09.000Z
- Submission ID: 2016883606

## Pattern

Combinatorics baseline.

## Key Idea

The solution fills each row using the binomial coefficient `C(i, j)`. That is mathematically direct and produces the right triangle, although the usual iterative approach builds each row from the previous row. The outer `while` is unnecessary because the inner loops already generate all rows.

## Mistake / Edge Case

The local archive does not show an import for `comb`, so a standalone run would need `from math import comb`. The important shape invariant is that row `i` has `i + 1` values.

## Complexity

- Time: O(numRows^2), ignoring the cost inside `comb`
- Space: O(numRows^2) for the returned triangle

## What Adrian Should Remember

Pascal's triangle can be generated either from combinations or from the previous row; the previous-row method is usually the better coding pattern.
