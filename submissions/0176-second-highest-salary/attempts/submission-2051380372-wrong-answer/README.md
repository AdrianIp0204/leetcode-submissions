# Second Highest Salary

- LeetCode: https://leetcode.com/problems/second-highest-salary/
- Language: txt
- Exported at: 2026-06-30T15:35:59.420Z
- Submission status seen by extension: Wrong Answer
- Difficulty: Medium
- Tags: Database
- Runtime: 283
- Memory: 67396000
- Submitted at: 2026-06-30T15:35:53.000Z
- Submission ID: 2051380372

## Pattern

Pandas distinct values / sorting

## Key Idea

The code removes duplicate salaries and sorts before selecting a row.

## Mistake / Edge Case

Mechanical issue: sorting ascending selects the second-lowest distinct salary,
not the second-highest salary.

## Complexity

- Time: O(n log n)
- Space: O(n)
