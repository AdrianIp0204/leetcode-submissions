# Employee Bonus

- LeetCode: https://leetcode.com/problems/employee-bonus/
- Language: txt
- Exported at: 2026-06-23T06:27:50.796Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Database
- Runtime: 382
- Memory: 68904000
- Submitted at: 2026-06-23T06:27:48.000Z
- Submission ID: 2042993311

## Pattern

Join plus nullable filter

## Key Idea

Join employees to bonuses, then keep rows where the bonus is missing or below 1000.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: employees with no bonus row have a null bonus and should remain eligible.

## Complexity

- Time: O(e + b) expected
- Space: O(e + b)
