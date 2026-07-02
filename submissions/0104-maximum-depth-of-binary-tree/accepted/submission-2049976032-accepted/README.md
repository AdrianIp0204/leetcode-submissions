# Maximum Depth of Binary Tree

- LeetCode: https://leetcode.com/problems/maximum-depth-of-binary-tree/
- Language: python3
- Exported at: 2026-06-29T11:13:22.866Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Tree, Depth-First Search, Breadth-First Search, Binary Tree
- Runtime: 5
- Memory: 23156000
- Submitted at: 2026-06-29T11:13:20.000Z
- Submission ID: 2049976032

## Pattern

Tree DFS / postorder recursion

## Key Idea

An empty subtree has depth zero; a non-empty subtree has depth one plus the
larger depth of its two children. The cache decorator is unnecessary for a tree
because each node is reached once.

## Mistake / Edge Case

No code-supported personal mistake recorded.

## Complexity

- Time: O(n)
- Space: O(h), where `h` is the tree height
