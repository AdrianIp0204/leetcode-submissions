# Roman to Integer

- LeetCode: https://leetcode.com/problems/roman-to-integer/
- Language: python3
- Exported at: 2026-06-02T11:30:28.140Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-05-15T10:15:20.000Z
- Submission ID: 2003705661

## Pattern

Symbol counting with subtractive-pair handling.

## Key Idea

The solution first searches for subtractive pairs such as `IV`, `IX`, and `CM`, adds their values, and removes them from the string. After that, the remaining symbols can be counted normally and multiplied by their values. This is a valid baseline, though a cleaner one-pass scan can compare each symbol with the next symbol instead of mutating the string.

## Mistake / Edge Case

Subtractive pairs must be handled before counting single symbols. Otherwise `IV` becomes `I + V = 6` instead of `4`.

## Complexity

- Time: O(n), with a small fixed number of scans over the string
- Space: O(n), because `replace` creates new strings

## What Adrian Should Remember

When a notation has "small before large means subtract", either handle those pairs first or scan with lookahead.
