# Convert Date to Binary

- LeetCode: https://leetcode.com/problems/convert-date-to-binary/
- Language: python3
- Exported at: 2026-06-12T04:13:15.020Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math, String
- Memory: 19312000
- Submitted at: 2026-06-12T04:13:09.000Z
- Submission ID: 2030332907

## Pattern

split-map-join conversion.

## Key Idea

Split the date into year, month, and day, convert each decimal component to binary, and join them with hyphens.

## Mistake / Edge Case

Each part should be converted numerically so leading decimal zeros do not remain in the binary output.

## Complexity

- Time: O(1) for fixed date length
- Space: O(1)

## What Adrian Should Remember

For structured strings, split into fields, transform fields, then join with the same separator.
