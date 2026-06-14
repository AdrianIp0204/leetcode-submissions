# Number of Valid Clock Times

- LeetCode: https://leetcode.com/problems/number-of-valid-clock-times/
- Language: python3
- Exported at: 2026-06-12T06:40:49.685Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: String, Enumeration
- Memory: 19128000
- Submitted at: 2026-06-12T06:40:46.000Z
- Submission ID: 2030485580

## Pattern

case counting.

## Key Idea

Each unknown digit contributes a number of valid choices based on the other hour/minute digit. Multiply independent counts for hour tens, hour ones, minute tens, and minute ones.

## Mistake / Edge Case

Hour tens and ones are dependent: if the ones digit is 4-9, the tens digit can only be 0 or 1; if tens is 2, ones can only be 0-3.

## Complexity

- Time: O(1)
- Space: O(1)

## What Adrian Should Remember

For masked time strings, count choices per digit carefully; hour digits constrain each other.
