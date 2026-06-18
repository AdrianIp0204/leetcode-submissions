# Angle Between Hands of a Clock

- LeetCode: https://leetcode.com/problems/angle-between-hands-of-a-clock/
- Language: python3
- Exported at: 2026-06-18T02:37:33.270Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Math
- Runtime: 3
- Memory: 19328000
- Submitted at: 2026-06-18T02:37:31.000Z
- Submission ID: 2036954955

## Pattern

Clock-angle math

## Key Idea

Compute the minute hand angle, include minute progress in the hour hand angle,
then return the smaller arc between the hands.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: compare the direct angle with its
`360 - diff` complement.

## Complexity

- Time: O(1)
- Space: O(1)
