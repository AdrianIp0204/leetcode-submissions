# Valid Palindrome

- LeetCode: https://leetcode.com/problems/valid-palindrome/
- Language: python3
- Exported at: 2026-06-08T08:59:14.814Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Two Pointers, String
- Runtime: 3
- Memory: 20868000
- Submitted at: 2026-06-08T08:59:10.000Z
- Submission ID: 2026170034

## Pattern

Filter then compare reversed copy.

## Key Idea

The solution lowercases the string, filters out characters that are not ASCII letters or digits, and compares the filtered list with its reverse. This is accepted and clear for the LeetCode character set. A lower-space two-pointer version would skip invalid characters from both ends without building the filtered list.

## Mistake / Edge Case

Case and punctuation should not affect the answer. The explicit `ord` checks are ASCII-specific, so `str.isalnum()` would be easier to read if broader character handling mattered.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

For palindrome strings, decide first whether to normalize into a new string or use two pointers in place.
