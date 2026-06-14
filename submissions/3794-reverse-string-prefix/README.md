# Reverse String Prefix

- LeetCode: https://leetcode.com/problems/reverse-string-prefix/
- Language: python3
- Exported at: 2026-06-13T10:31:07.332Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Two Pointers, String
- Memory: 19304000
- Submitted at: 2026-06-13T10:31:01.000Z
- Submission ID: 2031667922

## Pattern

prefix slicing.

## Key Idea

Reverse the prefix ending at position `k - 1` and append the untouched suffix from `k` onward.

## Mistake / Edge Case

The accepted signature uses a 1-based prefix length/index, so slicing starts with `s[k-1::-1]`.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

For prefix reversal, slice the reversed prefix and concatenate the untouched tail.
