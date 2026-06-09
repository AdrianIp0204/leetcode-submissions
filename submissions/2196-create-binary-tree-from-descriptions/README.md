# Create Binary Tree From Descriptions

- LeetCode: https://leetcode.com/problems/create-binary-tree-from-descriptions/
- Language: python3
- Exported at: 2026-06-07T07:56:25.877Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Array, Hash Table, Tree, Binary Tree
- Runtime: 155
- Memory: 26956000
- Submitted at: 2026-06-07T02:57:01.000Z
- Submission ID: 2024887075

## Pattern

Hash map node construction / root detection.

## Key Idea

Create exactly one `TreeNode` object for each value and store it in a dictionary. For every description row, connect the child as either the left or right child of the parent and record that the child value has a parent. At the end, the root is the node that never appeared in the child set.

## Mistake / Edge Case

The key invariant is object identity: repeated appearances of the same value must reuse the same node object. Root detection should not depend on input order, only on the difference between all seen nodes and all seen children.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

When constructing a graph or tree from edge descriptions, keep a node map and a separate way to identify roots.
