# Project Employees I

- LeetCode: https://leetcode.com/problems/project-employees-i/
- Language: txt
- Exported at: 2026-06-23T08:30:15.997Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Database
- Runtime: 283
- Memory: 68792000
- Submitted at: 2026-06-23T08:30:13.000Z
- Submission ID: 2043126801

## Pattern

Join then grouped average

## Key Idea

Join project assignments to employee experience, group by `project_id`, and average `experience_years` rounded to two decimals.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: compute the average after the join so each project assignment has an experience value.

## Complexity

- Time: O(p + e) expected
- Space: O(p + e)
