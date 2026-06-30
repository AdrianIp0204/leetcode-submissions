# Binary Tree Right Side View

- Pattern: tree BFS / level-order traversal
- Original attempt: [submissions/0199-binary-tree-right-side-view](../../submissions/0199-binary-tree-right-side-view/)

## Model Solution

```python
from collections import deque


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return []

        res = []
        q = deque([root])

        while q:
            level_size = len(q)

            for i in range(level_size):
                node = q.popleft()
                if i == level_size - 1:
                    res.append(node.val)
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)

        return res
```

## Why This Is The Model

The accepted attempt uses BFS and records the last non-null node seen at each
level. The model answer keeps only real tree nodes in the queue, so each level's
last index is directly the visible node from the right.

## Invariant

At the start of each outer loop, the queue contains exactly the nodes in the
next level from left to right. The final node processed in that level is the one
visible from the right side.

## Complexity

- Time: O(n)
- Space: O(w), where `w` is the maximum level width

## Review Prompt

Why is the last node in left-to-right BFS order the right-side value for that
level?
