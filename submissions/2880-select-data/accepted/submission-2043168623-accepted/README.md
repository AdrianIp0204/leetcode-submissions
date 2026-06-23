# Select Data

- LeetCode: https://leetcode.com/problems/select-data/
- Language: txt
- Exported at: 2026-06-23T09:07:14.467Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Runtime: 295
- Memory: 67012000
- Submitted at: 2026-06-23T09:07:12.000Z
- Submission ID: 2043168623

## Pattern

Filter and projection

## Key Idea

Filter to `student_id == 101`, then return only the `name` and `age` columns.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: the id column is used for filtering but is not part of the output.

## Complexity

- Time: O(n)
- Space: O(n)
