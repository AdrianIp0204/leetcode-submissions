# Greatest Common Divisor of Strings

- LeetCode: https://leetcode.com/problems/greatest-common-divisor-of-strings/
- Language: python3
- Exported at: 2026-06-11T11:06:06.448Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math, String
- Memory: 19320000
- Submitted at: 2026-06-11T11:06:02.000Z
- Submission ID: 2029655640

## Pattern

string periodicity + gcd length.

## Key Idea

If `str1 + str2` equals `str2 + str1`, both strings are repetitions of the same base. The answer length is the gcd of the two lengths.

## Mistake / Edge Case

If concatenations differ, there is no common repeating base at all, so return an empty string.

## Complexity

- Time: O(n + m + min(n, m)) for the accepted divisor scan
- Space: O(n + m) for concatenation checks

## What Adrian Should Remember

String gcd needs both periodic compatibility and numeric gcd of lengths.
