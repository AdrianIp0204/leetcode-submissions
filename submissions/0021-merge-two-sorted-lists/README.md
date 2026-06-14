# Merge Two Sorted Lists

- LeetCode: https://leetcode.com/problems/merge-two-sorted-lists/
- Language: python3
- Exported at: 2026-06-06T05:34:25.424Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Linked List, Recursion
- Memory: 19156000
- Submitted at: 2026-06-06T03:53:52.000Z
- Submission ID: 2023791833

## Pattern

Linked list merge with dummy head.

## Key Idea

Use a dummy node so the output list always has a stable starting point. Compare the current values from both lists, append the smaller value, and move that source pointer forward. Once one list is empty, append the remaining values from the other list.

## Mistake / Edge Case

This solution creates new nodes instead of rewiring the original nodes, which is accepted but uses extra memory. Empty input lists are handled naturally because `res.next` stays `None` unless a node is appended.

## Complexity

- Time: O(n + m)
- Space: O(n + m), because this version allocates new nodes

## What Adrian Should Remember

A dummy head removes awkward special cases at the front of a linked-list result.
