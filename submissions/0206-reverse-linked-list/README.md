# Reverse Linked List

- LeetCode: https://leetcode.com/problems/reverse-linked-list/
- Language: python3
- Exported at: 2026-06-05T14:45:00.843Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Linked List, Recursion
- Memory: 20488000
- Submitted at: 2026-06-05T14:44:58.000Z
- Submission ID: 2023371282

## Pattern

Linked list pointer rewiring.

## Key Idea

Walk through the list once while carrying two pointers: `prev` is the already-reversed part and `curr` is the node currently being moved. Before changing `curr.next`, save the original next node in `tmp`; otherwise the rest of the list is lost. After the loop, `prev` is the new head.

## Mistake / Edge Case

The main danger is overwriting `curr.next` before saving it. Empty lists and one-node lists work naturally because the loop either never runs or rewires one node to `None`.

## Complexity

- Time: O(n)
- Space: O(1)

## What Adrian Should Remember

For linked-list pointer problems, write the meaning of each pointer before writing the loop.
