# Path Sum

- Pattern: tree DFS / running sum
- Original attempt: [submissions/0112-path-sum](../../submissions/0112-path-sum/)

## Model Solution

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if not root:
            return False

        stack = [(root, root.val)]
        while stack:
            node, total = stack.pop()

            if not node.left and not node.right and total == targetSum:
                return True
            if node.left:
                stack.append((node.left, total + node.left.val))
            if node.right:
                stack.append((node.right, total + node.right.val))

        return False
```

## Why This Is The Model

The accepted attempt uses an explicit DFS stack and carries the current
root-to-node sum with each node. It checks the target only at leaves, which
matches the root-to-leaf requirement.

## Invariant

Each stack entry stores a node together with the sum of the unique path from the
root to that node.

## Complexity

- Time: O(n)
- Space: O(h) best case for a balanced traversal stack, O(n) worst case

## Review Prompt

Why is it not enough for an intermediate node's running sum to equal the target?
