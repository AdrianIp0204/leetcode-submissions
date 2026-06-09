# Reverse String

- LeetCode: https://leetcode.com/problems/reverse-string/
- Language: python3
- Exported at: 2026-06-08T06:52:24.499Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Two Pointers, String
- Memory: 23328000
- Submitted at: 2026-06-08T06:52:18.000Z
- Submission ID: 2026053524

## Pattern

Built-in in-place reversal.

## Key Idea

The problem wants the input list modified in place, and Python's `list.reverse()` does exactly that. This is accepted and clean for Python, though it skips practicing the two-pointer swap loop behind the tag. A manual version would swap `left` and `right` until they cross.

## Mistake / Edge Case

The method must not return a new string or list. The mutation of `s` itself is the contract.

## Complexity

- Time: O(n)
- Space: O(1)

## What Adrian Should Remember

Know when a Python method mutates in place; `reverse()` changes the list and returns `None`.
