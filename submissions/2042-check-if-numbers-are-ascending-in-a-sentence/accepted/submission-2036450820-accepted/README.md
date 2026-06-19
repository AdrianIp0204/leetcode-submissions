# Check if Numbers Are Ascending in a Sentence

- LeetCode: https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/
- Language: python3
- Exported at: 2026-06-17T14:05:37.062Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: String
- Runtime: 3
- Memory: 19108000
- Submitted at: 2026-06-17T14:05:35.000Z
- Submission ID: 2036450820

## Pattern

One-pass numeric scan

## Key Idea

Split the sentence into tokens, parse numeric tokens, and ensure each parsed
number is strictly larger than the previous parsed number.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: only numeric tokens should update the
previous-number state.

## Complexity

- Time: O(n)
- Space: O(n)
