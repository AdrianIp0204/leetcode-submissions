# Check if a String Is an Acronym of Words

- LeetCode: https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/
- Language: python3
- Exported at: 2026-06-10T14:24:29.318Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, String
- Memory: 19276000
- Submitted at: 2026-06-10T14:24:25.000Z
- Submission ID: 2028720620

## Pattern

zip comparison.

## Key Idea

The acronym must have one character per word, and each character must match that word's first letter.

## Mistake / Edge Case

Check lengths first so `zip` cannot hide extra words or extra acronym letters.

## Complexity

- Time: O(n)
- Space: O(1)

## What Adrian Should Remember

Before zipping two sequences for equality, verify their lengths when extras matter.
