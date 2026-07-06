# Maximum Depth of Binary Tree

- Pattern: tree DFS / postorder recursion
- Original attempt: [submissions/0104-maximum-depth-of-binary-tree](../../submissions/0104-maximum-depth-of-binary-tree/)

## Model Solution

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0

        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))
```

## Why This Is The Model

The accepted attempts use the core recurrence directly: an empty subtree has
depth zero, and a non-empty subtree is one level plus the deeper child. No cache
is needed because each node is reached once in a tree.

## Invariant

For any node, the recursive call returns the number of nodes on the longest path
from that node down to a leaf.

## Complexity

- Time: O(n)
- Space: O(h), where `h` is the tree height

## Review Prompt

Why does taking `max(left_depth, right_depth)` describe the longest root-to-leaf
path?
