# Binary Tree Inorder Traversal

- LeetCode: https://leetcode.com/problems/binary-tree-inorder-traversal/
- Language: python3
- Exported at: 2026-06-29T11:08:56.964Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Stack, Tree, Depth-First Search, Binary Tree
- Memory: 19468000
- Submitted at: 2026-06-29T11:08:54.000Z
- Submission ID: 2049971987

## Pattern

Tree DFS / inorder traversal

## Key Idea

Visit the left subtree, append the current node value, then visit the right
subtree. The cache decorator is unnecessary because each tree node is visited
once.

## Mistake / Edge Case

No code-supported personal mistake recorded.

## Complexity

- Time: O(n)
- Space: O(h), where `h` is the tree height
