# Maximum Number of Words You Can Type

- LeetCode: https://leetcode.com/problems/maximum-number-of-words-you-can-type/
- Language: python3
- Exported at: 2026-06-14T10:32:01.008Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Hash Table, String
- Memory: 19076000
- Submitted at: 2026-06-14T10:31:58.000Z
- Submission ID: 2032709466

## Pattern

Word scan with forbidden characters

## Key Idea

Split text into words and exclude each word that contains at least one broken letter.

## Mistake / Edge Case

TODO

## Complexity

- Time: O(w * b * m), where w is words, b is broken letters, and m is word length for membership checks
- Space: O(w) for the split words
