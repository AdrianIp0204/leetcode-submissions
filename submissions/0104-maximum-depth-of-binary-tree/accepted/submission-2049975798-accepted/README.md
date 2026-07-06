# Maximum Depth of Binary Tree

- LeetCode: https://leetcode.com/problems/maximum-depth-of-binary-tree/
- Language: python3
- Exported at: 2026-06-29T11:13:09.751Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Tree, Depth-First Search, Breadth-First Search, Binary Tree
- Runtime: 4
- Memory: 20220000
- Submitted at: 2026-06-29T11:13:04.000Z
- Submission ID: 2049975798

## Pattern

Tree DFS / postorder recursion

## Key Idea

An empty subtree has depth zero; a non-empty subtree has depth one plus the
larger depth of its two children.

## Mistake / Edge Case

No code-supported personal mistake recorded.

## Complexity

- Time: O(n)
- Space: O(h), where `h` is the tree height
