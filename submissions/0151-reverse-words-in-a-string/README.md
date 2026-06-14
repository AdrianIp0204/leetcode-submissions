# Reverse Words in a String

- LeetCode: https://leetcode.com/problems/reverse-words-in-a-string/
- Language: python3
- Exported at: 2026-06-11T12:56:04.654Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Two Pointers, String
- Memory: 19392000
- Submitted at: 2026-06-11T12:56:00.000Z
- Submission ID: 2029748299

## Pattern

string normalization with split/join.

## Key Idea

`split()` without arguments removes extra spaces and gives the real words. Reversing that word list and joining with single spaces produces the required normalized sentence.

## Mistake / Edge Case

Leading, trailing, and repeated spaces should disappear; splitting on a literal single space would preserve empty tokens.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

When whitespace normalization is allowed, `split()` is often the cleanest parser.
