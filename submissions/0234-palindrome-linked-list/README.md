# Palindrome Linked List

- LeetCode: https://leetcode.com/problems/palindrome-linked-list/
- Language: python3
- Exported at: 2026-06-12T07:54:48.779Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Linked List, Two Pointers, Stack, Recursion
- Runtime: 10
- Memory: 53464000
- Submitted at: 2026-06-12T07:54:43.000Z
- Submission ID: 2030556986

## Pattern

linked list to array comparison.

## Key Idea

Copy node values into an array, then compare the array with its reverse. This trades extra space for simple palindrome checking.

## Mistake / Edge Case

Single-node and empty suffix cases work because an array equals its reverse when it is already palindromic.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

The array version is the clearest first solution; the O(1) space upgrade reverses the second half in place.
