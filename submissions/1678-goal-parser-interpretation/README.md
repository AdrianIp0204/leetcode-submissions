# Goal Parser Interpretation

- LeetCode: https://leetcode.com/problems/goal-parser-interpretation/
- Language: python3
- Exported at: 2026-06-13T13:51:13.672Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: String
- Runtime: 36
- Memory: 19064000
- Submitted at: 2026-06-13T13:51:08.000Z
- Submission ID: 2031828677

## Pattern

literal string replacement.

## Key Idea

The command language has fixed tokens, so replace `(al)` with `al` and `()` with `o`.

## Mistake / Edge Case

Replacement order is safe because the two tokens do not overlap in a way that changes each other.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

For fixed-token parsers, literal replacements can be the simplest correct parser.
