# Ransom Note

- LeetCode: https://leetcode.com/problems/ransom-note/
- Language: python3
- Exported at: 2026-06-18T02:52:36.089Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Hash Table, String, Counting
- Runtime: 15
- Memory: 19696000
- Submitted at: 2026-06-18T02:52:35.000Z
- Submission ID: 2036962017

## Pattern

Frequency counting

## Key Idea

Count required characters from `r` and available characters from `m`, then fail
as soon as a requirement is larger than the available count.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: missing characters default to count
zero.

## Complexity

- Time: O(r + m)
- Space: O(u), where u is the number of distinct counted characters
