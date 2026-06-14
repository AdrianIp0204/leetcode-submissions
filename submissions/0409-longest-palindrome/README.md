# Longest Palindrome

- LeetCode: https://leetcode.com/problems/longest-palindrome/
- Language: python3
- Exported at: 2026-06-08T04:31:22.051Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Hash Table, String, Greedy
- Runtime: 1
- Memory: 19192000
- Submitted at: 2026-06-07T10:12:27.000Z
- Submission ID: 2025241747

## Pattern

Frequency counting with parity.

## Key Idea

A palindrome can use all characters with even counts, and for odd counts it can use `count - 1` characters as paired sides. At most one odd character can sit in the center, so the code adds one extra character if any odd count exists. The dictionary stores each character frequency.

## Mistake / Edge Case

Only one odd-frequency group can contribute its unpaired character. The check `i > 2` still works because odd count `1` contributes zero paired characters, but `i >= 3` would express the intent more clearly.

## Complexity

- Time: O(n)
- Space: O(k), where `k` is distinct characters

## What Adrian Should Remember

For palindrome length from letters, think pairs plus one optional center.
