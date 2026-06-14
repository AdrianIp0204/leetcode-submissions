# String Matching in an Array

- LeetCode: https://leetcode.com/problems/string-matching-in-an-array/
- Language: python3
- Exported at: 2026-06-12T08:00:11.274Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, String, String Matching
- Runtime: 2
- Memory: 19320000
- Submitted at: 2026-06-12T08:00:05.000Z
- Submission ID: 2030561486

## Pattern

substring search over word pairs.

## Key Idea

For each word, check whether it appears inside any longer word. Once found, add it once and stop checking that word.

## Mistake / Edge Case

A word should not count as a substring of itself; only compare against longer words.

## Complexity

- Time: O(w^2 * L) in the straightforward pair scan
- Space: O(r) for the result

## What Adrian Should Remember

For small constraints, direct pairwise substring checks are often clearer than building a search structure.
