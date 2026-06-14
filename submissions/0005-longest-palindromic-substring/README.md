# Longest Palindromic Substring

- LeetCode: https://leetcode.com/problems/longest-palindromic-substring/
- Language: python3
- Exported at: 2026-06-03T07:35:11.988Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Two Pointers, String, Dynamic Programming
- Runtime: 5177
- Memory: 19220000
- Submitted at: 2026-06-03T07:59:38.000Z
- Submission ID: 2021003305

## Pattern

Brute-force palindrome check.

## Key Idea

This accepted solution tests every substring longer than the current best and checks whether it equals its reverse. It is readable and good for confirming the definition, but it repeats a lot of work. The next stronger pattern is expanding around each possible center, handling both odd-length and even-length palindromes.

## Mistake / Edge Case

The code correctly returns immediately for strings of length 0 or 1. The expensive part is `s[i:j+1] == s[i:j+1][::-1]`, because each check copies and reverses a substring.

## Complexity

- Time: O(n^3)
- Space: O(n) temporary space for substring/reverse checks

## What Adrian Should Remember

Palindrome substring problems usually become cleaner if you expand from centers instead of generating every substring.
