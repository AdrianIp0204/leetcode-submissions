# Binary Tree Right Side View

- LeetCode: https://leetcode.com/problems/binary-tree-right-side-view/
- Language: python3
- Exported at: 2026-06-29T07:43:00.017Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Tree, Depth-First Search, Breadth-First Search, Binary Tree
- Memory: 19200000
- Submitted at: 2026-06-29T07:42:55.000Z
- Submission ID: 2049759693

## Pattern

tree BFS / level-order traversal

## Key Idea

Traverse the tree level by level and record the last non-null node seen at each level.

## Mistake / Edge Case

The queue may contain `None` placeholders, but only non-null nodes are expanded or recorded.

## Complexity

- Time: O(n)
- Space: O(w), where `w` is the maximum level width
