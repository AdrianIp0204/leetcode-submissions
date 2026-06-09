# Number of Strings That Appear as Substrings in Word

- LeetCode: https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/
- Language: python3
- Exported at: 2026-06-08T04:31:24.948Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, String
- Memory: 19240000
- Submitted at: 2026-06-07T09:45:47.000Z
- Submission ID: 2025221574

## Pattern

Substring membership count.

## Key Idea

Scan every pattern and use Python's substring check to see whether it appears in the word. Count each pattern independently. This is direct and matches the small constraints.

## Mistake / Edge Case

Count patterns, not distinct substrings; duplicate patterns would each be checked as separate entries.

## Complexity

- Time: O(p * L), roughly patterns times word-search cost
- Space: O(1)

## What Adrian Should Remember

Use the language's string membership operator for simple substring checks before overbuilding.
