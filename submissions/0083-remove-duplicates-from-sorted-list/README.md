# Remove Duplicates from Sorted List

- LeetCode: https://leetcode.com/problems/remove-duplicates-from-sorted-list/
- Language: python3
- Exported at: 2026-06-08T04:31:14.402Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Linked List
- Runtime: 3
- Memory: 19320000
- Submitted at: 2026-06-08T04:23:05.000Z
- Submission ID: 2025901114

## Pattern

Linked list scan with a dummy head.

## Key Idea

The solution walks the sorted list and appends a new node only when the value differs from the last value added to the result list. The dummy head makes it easy to return the built list at the end. It is accepted, but it allocates a new list instead of rewiring the existing nodes in place.

## Mistake / Edge Case

An empty input should return `None`, and repeated values should advance the input pointer without extending the output. The dummy value must be outside the possible node values, which is a slightly brittle assumption.

## Complexity

- Time: O(n)
- Space: O(n), because it builds new nodes

## What Adrian Should Remember

For sorted linked lists, compare the current node with the last kept value; for in-place practice, skip duplicate nodes by changing `next`.
