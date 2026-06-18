# Angle Between Hands of a Clock

- LeetCode: https://leetcode.com/problems/angle-between-hands-of-a-clock/
- Language: python3
- Exported at: 2026-06-18T02:38:40.100Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Math
- Memory: 19316000
- Submitted at: 2026-06-18T02:38:37.000Z
- Submission ID: 2036955449

## Pattern

Clock-angle math

## Key Idea

Compute each hand's absolute angle from 12 o'clock and use `min(diff, 360 -
diff)` to return the smaller angle.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: hour `12` should be treated as zero
hours around the clock.

## Complexity

- Time: O(1)
- Space: O(1)
