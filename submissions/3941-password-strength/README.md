# Password Strength

- LeetCode: https://leetcode.com/problems/password-strength/
- Language: python3
- Exported at: 2026-06-06T05:34:23.288Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Hash Table, String
- Runtime: 4
- Memory: 19776000
- Submitted at: 2026-06-06T05:31:29.000Z
- Submission ID: 2023865724

## Pattern

Unique-character category scoring.

## Key Idea

Convert the password to a set so each distinct character contributes once. Then add a category-specific score based on whether the character is lowercase, uppercase, digit, or other. The result is the sum over unique character categories.

## Mistake / Edge Case

Repeated characters should not add repeated strength because the set removes duplicates.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

Check whether a scoring problem counts occurrences or distinct characters before looping.
