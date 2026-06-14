# Student Attendance Record I

- LeetCode: https://leetcode.com/problems/student-attendance-record-i/
- Language: python3
- Exported at: 2026-06-12T07:34:20.395Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: String
- Memory: 19292000
- Submitted at: 2026-06-12T07:34:15.000Z
- Submission ID: 2030540339

## Pattern

counting + substring check.

## Key Idea

A valid record has fewer than two absences and no run of three lates. Count `A` and search for `LLL`.

## Mistake / Edge Case

Two separate late pairs are fine; only three consecutive `L` characters violate the rule.

## Complexity

- Time: O(n)
- Space: O(1)

## What Adrian Should Remember

Translate simple eligibility rules into one count check and one pattern check.
