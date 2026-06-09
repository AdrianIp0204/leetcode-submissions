# Employees Earning More Than Their Managers

- LeetCode: https://leetcode.com/problems/employees-earning-more-than-their-managers/
- Language: txt
- Exported at: 2026-06-05T14:09:55.713Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Database
- Runtime: 290
- Memory: 68316000
- Submitted at: 2026-06-04T05:58:38.000Z
- Submission ID: 2021931085

## Pattern

Self join with filtering.

## Key Idea

The solution joins the employee table to itself, matching each employee's `managerId` to another row's `id`. After the merge, each row has both employee salary and manager salary, so the filter is just `salary > salary_manager`. The final rename keeps only the expected `Employee` column.

## Mistake / Edge Case

Employees without a manager should not appear, and the self join naturally drops them. The suffixes are important because both sides of the join have columns with the same names.

## Complexity

- Time: O(n) expected for the merge and filter
- Space: O(n)

## What Adrian Should Remember

When rows need to be compared against related rows in the same table, use a self join.
