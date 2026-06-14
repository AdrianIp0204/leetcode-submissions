# Detect Capital

- LeetCode: https://leetcode.com/problems/detect-capital/
- Language: python3
- Exported at: 2026-06-12T09:51:12.907Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: String
- Memory: 19248000
- Submitted at: 2026-06-12T09:51:07.000Z
- Submission ID: 2030665521

## Pattern

string case predicates.

## Key Idea

There are only three valid capitalization patterns: all lowercase, all uppercase, or title case. Python exposes those directly.

## Mistake / Edge Case

A one-letter word is both upper/title-compatible, so predicate checks avoid special casing it manually.

## Complexity

- Time: O(n)
- Space: O(1)

## What Adrian Should Remember

Before hand-writing case logic, check whether the language already has exact string predicates.
