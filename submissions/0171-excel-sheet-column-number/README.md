# Excel Sheet Column Number

- LeetCode: https://leetcode.com/problems/excel-sheet-column-number/
- Language: python3
- Exported at: 2026-06-11T08:06:06.521Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math, String
- Memory: 19204000
- Submitted at: 2026-06-11T08:06:02.000Z
- Submission ID: 2029480869

## Pattern

base-26 accumulation.

## Key Idea

Read left to right. Each new letter shifts the previous value by one base-26 digit and adds the current letter's 1-based value.

## Mistake / Edge Case

`A` is 1, not 0, so the character offset is `ord(c) - 64` for uppercase ASCII letters.

## Complexity

- Time: O(n)
- Space: O(1)

## What Adrian Should Remember

Decoding a positional number is always `value = value * base + digit`.
