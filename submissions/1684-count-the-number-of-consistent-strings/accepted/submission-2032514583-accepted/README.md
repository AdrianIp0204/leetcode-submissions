# Count the Number of Consistent Strings

- LeetCode: https://leetcode.com/problems/count-the-number-of-consistent-strings/
- Language: python3
- Exported at: 2026-06-14T06:30:36.180Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Hash Table, String, Bit Manipulation, Counting
- Runtime: 225
- Memory: 20992000
- Submitted at: 2026-06-14T06:30:34.000Z
- Submission ID: 2032514583

## Pattern

Set containment

## Key Idea

Convert allowed characters to a set and count words whose character set is a subset of it.

## Mistake / Edge Case

TODO

## Complexity

- Time: O(total characters in words + len(allowed))
- Space: O(a + w) for the allowed set and one word set
