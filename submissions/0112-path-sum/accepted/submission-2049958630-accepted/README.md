# Path Sum

- LeetCode: https://leetcode.com/problems/path-sum/
- Language: python3
- Exported at: 2026-06-29T10:54:49.724Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Tree, Depth-First Search, Breadth-First Search, Binary Tree
- Runtime: 4
- Memory: 20240000
- Submitted at: 2026-06-29T10:54:43.000Z
- Submission ID: 2049958630

## Pattern

Tree DFS / running sum

## Key Idea

Carry the root-to-current-node sum on the DFS stack and compare with the target
only when the current node is a leaf.

## Mistake / Edge Case

No code-supported personal mistake recorded.

## Complexity

- Time: O(n)
- Space: O(n) worst case for the explicit stack
