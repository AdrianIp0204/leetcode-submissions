# Delete the Middle Node of a Linked List

- LeetCode: https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/
- Language: python3
- Exported at: 2026-06-15T02:53:16.131Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Linked List, Two Pointers
- Runtime: 275
- Memory: 72692000
- Submitted at: 2026-06-15T02:53:13.000Z
- Submission ID: 2033346631

## Pattern

Linked list traversal

## Key Idea

The submitted solution counts nodes, computes the middle index, and builds a new list that skips that index.

## Mistake / Edge Case

This accepted version copies nodes; the model pattern is to relink the original list in place with slow and fast pointers.

## Complexity

- Time: O(n)
- Space: O(n)
