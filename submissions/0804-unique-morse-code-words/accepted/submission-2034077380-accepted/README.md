# Unique Morse Code Words

- LeetCode: https://leetcode.com/problems/unique-morse-code-words/
- Language: python3
- Exported at: 2026-06-15T15:05:44.196Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Hash Table, String
- Memory: 19424000
- Submitted at: 2026-06-15T15:05:41.000Z
- Submission ID: 2034077380

## Pattern

Set of transformed strings

## Key Idea

Map each character to its Morse code fragment, join the fragments for a word, and count unique transformed strings.

## Mistake / Edge Case

Build the full transformation before inserting it into the set so different words with the same transformation collapse together.

## Complexity

- Time: O(total characters)
- Space: O(number of words * transformed length)
