# Find Most Frequent Vowel and Consonant

- LeetCode: https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/
- Language: python3
- Exported at: 2026-06-07T07:56:30.299Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Hash Table, String, Counting
- Memory: 19344000
- Submitted at: 2026-06-06T07:44:11.000Z
- Submission ID: 2023988767

## Pattern

Separate frequency maps.

## Key Idea

Count vowels and consonants in separate dictionaries, then add the maximum vowel frequency and maximum consonant frequency. The dictionaries are seeded so `max` is safe even if one category is absent. This matches the required sum of category maxima.

## Mistake / Edge Case

Vowels and consonants must be counted separately; the most frequent overall character is not enough.

## Complexity

- Time: O(n)
- Space: O(1), bounded lowercase alphabet

## What Adrian Should Remember

When a problem asks for category maxima, keep the categories separate from the start.
