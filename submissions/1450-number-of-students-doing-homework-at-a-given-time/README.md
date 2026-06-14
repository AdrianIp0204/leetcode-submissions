# Number of Students Doing Homework at a Given Time

- LeetCode: https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/
- Language: python3
- Exported at: 2026-06-07T03:23:56.736Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array
- Memory: 19368000
- Submitted at: 2026-06-07T03:23:53.000Z
- Submission ID: 2024921104

## Pattern

Interval containment count.

## Key Idea

Each student's active homework window is inclusive from start to end. Zip the two time arrays together and count windows where the query time lies inside the interval. No sorting is needed because every interval is independent.

## Mistake / Edge Case

The end time is inclusive, so `s <= query <= e` is the right check.

## Complexity

- Time: O(n)
- Space: O(1)

## What Adrian Should Remember

Translate interval wording into the exact inequality before coding.
