#   Count Symmetric Integers

- LeetCode: https://leetcode.com/problems/count-symmetric-integers/
- Language: python3
- Exported at: 2026-06-05T14:09:37.283Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math, Enumeration
- Runtime: 151
- Memory: 19200000
- Submitted at: 2026-06-05T13:26:35.000Z
- Submission ID: 2023308928

## Pattern

Digit-sum brute force.

## Key Idea

Scan every number in the range and consider only even-length numbers relevant to the constraints. For two-digit numbers, compare the two digits directly. For four-digit numbers, sum the last two digits and the first two digits, then compare.

## Mistake / Edge Case

Odd-length numbers are not symmetric by this problem's definition and should not be counted.

## Complexity

- Time: O(high - low + 1)
- Space: O(1)

## What Adrian Should Remember

For small numeric ranges, direct digit handling is often simpler than generalizing too early.
