# Count the Number of Vowel Strings in Range

- LeetCode: https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/
- Language: python3
- Exported at: 2026-06-18T03:04:24.115Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, String, Counting
- Memory: 19332000
- Submitted at: 2026-06-18T03:04:23.000Z
- Submission ID: 2036968027

## Pattern

Bounded scan

## Key Idea

Scan indices from `left` through `right` and count words whose first and last
characters are both in the vowel set.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: the right bound is inclusive.

## Complexity

- Time: O(right - left + 1)
- Space: O(1)
