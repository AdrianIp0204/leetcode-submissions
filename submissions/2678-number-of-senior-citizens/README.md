# Number of Senior Citizens

- LeetCode: https://leetcode.com/problems/number-of-senior-citizens/
- Language: python3
- Exported at: 2026-06-10T10:22:47.915Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, String
- Memory: 19352000
- Submitted at: 2026-06-10T10:22:44.000Z
- Submission ID: 2028512215

## Pattern

fixed-width string parsing.

## Key Idea

The age is stored at positions 11 and 12. Convert those two digits to a number and count it when greater than 60.

## Mistake / Edge Case

The comparison is strictly greater than 60, so age 60 is not counted.

## Complexity

- Time: O(n)
- Space: O(1)

## What Adrian Should Remember

When records have fixed fields, index the field directly instead of parsing unrelated characters.
