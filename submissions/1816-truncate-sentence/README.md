# Truncate Sentence

- LeetCode: https://leetcode.com/problems/truncate-sentence/
- Language: python3
- Exported at: 2026-06-13T14:00:25.006Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, String
- Memory: 19356000
- Submitted at: 2026-06-13T14:00:23.000Z
- Submission ID: 2031836160

## Pattern

split and join first k words.

## Key Idea

Split the sentence into words, keep the first `k`, and join them with spaces.

## Mistake / Edge Case

The accepted code uses `maxsplit=k`, but slicing `[:k]` is still what enforces the requested word count.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

When the output is word-based, parse words first instead of counting spaces by hand.
