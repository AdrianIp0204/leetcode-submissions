# Create a DataFrame from List

- LeetCode: https://leetcode.com/problems/create-a-dataframe-from-list/
- Language: txt
- Exported at: 2026-06-24T04:54:36.066Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Runtime: 295
- Memory: 65952000
- Submitted at: 2026-06-24T04:54:34.000Z
- Submission ID: 2044112379

## Pattern

DataFrame construction with explicit schema

## Key Idea

Build the dataframe directly from the nested list and assign the required
`student_id` and `age` column names.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: preserve the given row order and use
the exact requested column names.

## Complexity

- Time: O(n)
- Space: O(n)
