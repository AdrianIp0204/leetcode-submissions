# Letter Combinations of a Phone Number

- LeetCode: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
- Language: python3
- Exported at: 2026-06-29T09:29:07.868Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Hash Table, String, Backtracking
- Memory: 19340000
- Submitted at: 2026-06-29T09:29:00.000Z
- Submission ID: 2049868254

## Pattern

cartesian product / backtracking

## Key Idea

Map each digit to its letters and enumerate every letter choice for the submitted input length.

## Mistake / Edge Case

The code is explicitly unrolled for lengths 1 through 4 and assumes a non-empty `digits` string.

## Complexity

- Time: O(4^n * n)
- Space: O(4^n * n) for the returned combinations
