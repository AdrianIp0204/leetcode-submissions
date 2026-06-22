# Check if Numbers Are Ascending in a Sentence

- LeetCode: https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/
- Language: python3
- Exported at: 2026-06-17T14:07:25.078Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: String
- Memory: 19280000
- Submitted at: 2026-06-17T14:07:20.000Z
- Submission ID: 2036452608

## Pattern

One-pass numeric scan

## Key Idea

Split the sentence into tokens, parse numeric tokens, and ensure each parsed
number is strictly larger than the previous parsed number.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: equal adjacent numbers fail because
the order must be strictly increasing.

## Complexity

- Time: O(n)
- Space: O(n)
