# Swap Sex of Employees

- LeetCode: https://leetcode.com/problems/swap-sex-of-employees/
- Language: txt
- Exported at: 2026-06-23T06:11:07.616Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Database
- Runtime: 273
- Memory: 66752000
- Submitted at: 2026-06-23T06:11:04.000Z
- Submission ID: 2042970406

## Pattern

Conditional column transform

## Key Idea

Apply a two-way mapping to the `sex` column: `m` becomes `f`, and every other recorded value in the accepted code becomes `m`.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: only the `sex` column should change.

## Complexity

- Time: O(n)
- Space: O(1) extra aside from the updated column
