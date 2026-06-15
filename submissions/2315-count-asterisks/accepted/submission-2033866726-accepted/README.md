# Count Asterisks

- LeetCode: https://leetcode.com/problems/count-asterisks/
- Language: python3
- Exported at: 2026-06-15T11:20:24.581Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: String
- Memory: 19196000
- Submitted at: 2026-06-15T11:20:19.000Z
- Submission ID: 2033866726

## Pattern

Delimited-string scanning

## Key Idea

Split on the pipe delimiter and count asterisks only in the even-indexed segments outside paired delimiters.

## Mistake / Edge Case

Only every other segment contributes; delimiter-enclosed segments are skipped.

## Complexity

- Time: O(n)
- Space: O(n)
