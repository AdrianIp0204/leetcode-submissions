# Sort Vowels in a String

- LeetCode: https://leetcode.com/problems/sort-vowels-in-a-string/
- Language: python3
- Exported at: 2026-06-17T14:49:36.219Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: String, Sorting
- Runtime: 72
- Memory: 26256000
- Submitted at: 2026-06-17T14:49:34.000Z
- Submission ID: 2036496446

## Pattern

Collect and replace selected positions

## Key Idea

Collect vowel positions and vowel characters, sort only the vowel characters,
then write them back into the original vowel positions.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: consonants and non-vowels keep their
original positions.

## Complexity

- Time: O(n log n)
- Space: O(n)
