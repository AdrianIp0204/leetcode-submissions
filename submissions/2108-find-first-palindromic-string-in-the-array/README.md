# Find First Palindromic String in the Array

- LeetCode: https://leetcode.com/problems/find-first-palindromic-string-in-the-array/
- Language: python3
- Exported at: 2026-06-02T11:30:09.586Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-06-01T13:32:23.000Z
- Submission ID: 2019148870

## Pattern

First-match scan.

## Key Idea

Scan the words in order and return the first word equal to its reverse. Reversing through `reversed` plus join gives a direct palindrome check. If no word matches, return the empty string.

## Mistake / Edge Case

Return immediately on the first palindrome, not the shortest or last palindrome.

## Complexity

- Time: O(total characters checked)
- Space: O(L), for the reversed word comparison

## What Adrian Should Remember

When the problem asks for the first valid item, preserve input order and exit early.
