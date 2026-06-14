# Capitalize the Title

- LeetCode: https://leetcode.com/problems/capitalize-the-title/
- Language: python3
- Exported at: 2026-06-12T09:47:19.292Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: String
- Memory: 19276000
- Submitted at: 2026-06-12T09:47:16.000Z
- Submission ID: 2030661587

## Pattern

word transformation.

## Key Idea

Title-case words first, then force words shorter than three characters to lowercase.

## Mistake / Edge Case

Words of length one or two must be all lowercase even if title-casing would capitalize them.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

Apply the special short-word rule after normalizing word case.
