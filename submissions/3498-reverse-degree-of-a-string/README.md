# Reverse Degree of a String

- LeetCode: https://leetcode.com/problems/reverse-degree-of-a-string/
- Language: python3
- Exported at: 2026-06-14T01:33:26.618Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: String, Simulation
- Runtime: 3
- Memory: 19076000
- Submitted at: 2026-06-14T01:33:23.000Z
- Submission ID: 2032243015

## Pattern

weighted character accumulation.

## Key Idea

For a lowercase letter, `123 - ord(c)` gives its reverse alphabet value, and the problem multiplies that by the 1-indexed position.

## Mistake / Edge Case

Positions start at `1`, so the multiplier is `i + 1`, not the zero-based index.

## Complexity

- Time: O(n)
- Space: O(1)

## What Adrian Should Remember

Reverse alphabet value can be computed directly from character codes without building a lookup table.
