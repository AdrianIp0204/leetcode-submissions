# Number of Unique Subjects Taught by Each Teacher

- LeetCode: https://leetcode.com/problems/number-of-unique-subjects-taught-by-each-teacher/
- Language: txt
- Exported at: 2026-06-22T08:16:28.854Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Database
- Runtime: 290
- Memory: 67832000
- Submitted at: 2026-06-22T08:16:27.000Z
- Submission ID: 2041876497

## Pattern

Grouped distinct count

## Key Idea

Group by `teacher_id` and count distinct `subject_id` values with `nunique`.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: duplicate teacher-subject rows should not increase the count.

## Complexity

- Time: O(n) expected
- Space: O(n)
