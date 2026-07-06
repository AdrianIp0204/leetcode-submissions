# Binary Tree Inorder Traversal

- Pattern: tree DFS / inorder traversal
- Original attempt: [submissions/0094-binary-tree-inorder-traversal](../../submissions/0094-binary-tree-inorder-traversal/)

## Model Solution

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []

        def dfs(node):
            if not node:
                return
            dfs(node.left)
            res.append(node.val)
            dfs(node.right)

        dfs(root)
        return res
```

## Why This Is The Model

The accepted attempt already uses the right traversal order: left subtree, node,
then right subtree. The model keeps the recursive helper simple and avoids
memoization, which does not help when each tree node is visited once.

## Invariant

After `dfs(node)` returns, every value in `node`'s subtree has been appended in
inorder sequence.

## Complexity

- Time: O(n)
- Space: O(h), where `h` is the tree height

## Review Prompt

Why does appending the current node between the two recursive calls produce
inorder traversal?
