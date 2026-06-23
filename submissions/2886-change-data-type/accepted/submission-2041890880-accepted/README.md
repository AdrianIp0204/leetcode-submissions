# Change Data Type

- LeetCode: https://leetcode.com/problems/change-data-type/
- Language: txt
- Exported at: 2026-06-22T08:29:32.312Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Runtime: 315
- Memory: 66504000
- Submitted at: 2026-06-22T08:29:29.000Z
- Submission ID: 2041890880

## Pattern

Column dtype conversion

## Key Idea

Convert the `grade` column to integer with `astype(int)` and return the dataframe.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: rows and columns stay the same; only the grade dtype changes.

## Complexity

- Time: O(n)
- Space: O(n)
