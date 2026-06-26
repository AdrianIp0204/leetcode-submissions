# Is Subsequence

- LeetCode: https://leetcode.com/problems/is-subsequence/
- Language: python3
- Exported at: 2026-06-26T04:41:43.236Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Two Pointers, String, Dynamic Programming
- Memory: 19116000
- Submitted at: 2026-06-26T04:41:41.000Z
- Submission ID: 2046388098

## Pattern

Two pointers

## Key Idea

Scan `t` once while advancing an index through `s` only when the next needed
character is matched.

## Mistake / Edge Case

The empty `s` case is already a subsequence, so return early before indexing
`s[0]`.

## Complexity

- Time: O(len(t))
- Space: O(1)
