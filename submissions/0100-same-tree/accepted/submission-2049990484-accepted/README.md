# Same Tree

- LeetCode: https://leetcode.com/problems/same-tree/
- Language: python3
- Exported at: 2026-06-29T11:28:47.804Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Tree, Depth-First Search, Breadth-First Search, Binary Tree
- Memory: 19400000
- Submitted at: 2026-06-29T11:28:41.000Z
- Submission ID: 2049990484

## Pattern

Tree DFS / structural recursion

## Key Idea

Two subtrees match only when both roots exist or both are empty, root values
match, and both child pairs match recursively.

## Mistake / Edge Case

No code-supported personal mistake recorded.

## Complexity

- Time: O(n)
- Space: O(h), where `h` is the recursion depth
