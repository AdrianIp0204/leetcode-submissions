# Find Total Time Spent by Each Employee

- LeetCode: https://leetcode.com/problems/find-total-time-spent-by-each-employee/
- Language: txt
- Exported at: 2026-06-23T08:56:05.976Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Database
- Runtime: 330
- Memory: 67564000
- Submitted at: 2026-06-23T08:56:05.000Z
- Submission ID: 2043155553

## Pattern

Duration then grouped sum

## Key Idea

Convert each row to a session duration with `out_time - in_time`, then sum by day and employee.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: multiple sessions for the same employee on the same day must be summed.

## Complexity

- Time: O(n) expected
- Space: O(n)
