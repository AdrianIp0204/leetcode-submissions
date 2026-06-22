# Sorting the Sentence

- LeetCode: https://leetcode.com/problems/sorting-the-sentence/
- Language: python3
- Exported at: 2026-06-17T13:57:06.953Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: String, Sorting
- Runtime: 43
- Memory: 19072000
- Submitted at: 2026-06-17T13:57:07.000Z
- Submission ID: 2036442220

## Pattern

Place by encoded index

## Key Idea

Split the sentence, read each word's trailing position digit, remove that digit,
and place the word in a preallocated result array.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: convert the trailing digit from
one-based to zero-based indexing.

## Complexity

- Time: O(n)
- Space: O(n)
