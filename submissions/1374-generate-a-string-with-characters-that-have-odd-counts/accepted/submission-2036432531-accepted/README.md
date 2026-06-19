# Generate a String With Characters That Have Odd Counts

- LeetCode: https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/
- Language: python3
- Exported at: 2026-06-17T13:47:36.408Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: String
- Memory: 19276000
- Submitted at: 2026-06-17T13:47:34.000Z
- Submission ID: 2036432531

## Pattern

Parity construction

## Key Idea

For odd `n`, return one character repeated `n` times. For even `n`, use
`n - 1` copies of one character plus one different character so both counts are
odd.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: even lengths need two odd-count
characters, not one even-count character.

## Complexity

- Time: O(n)
- Space: O(n)
