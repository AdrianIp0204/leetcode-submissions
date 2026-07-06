# Same Tree

- Pattern: tree DFS / structural recursion
- Original attempt: [submissions/0100-same-tree](../../submissions/0100-same-tree/)

## Model Solution

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        if not p and not q:
            return True
        if not p or not q:
            return False
        if p.val != q.val:
            return False

        return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
```

## Why This Is The Model

The accepted solution compares both node existence and node values at the same
position before recursing into the matching children. This preserves structure,
not just traversal values.

## Invariant

`isSameTree(p, q)` returns true only when the two rooted subtrees have matching
presence, matching root values, and recursively matching left and right
subtrees.

## Complexity

- Time: O(n), where `n` is the number of compared nodes
- Space: O(h), where `h` is the recursion depth

## Review Prompt

Why can two different tree shapes have the same inorder value list?
