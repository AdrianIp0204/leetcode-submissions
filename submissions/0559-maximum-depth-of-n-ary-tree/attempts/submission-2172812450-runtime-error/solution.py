from collections import deque
"""
# Definition for a Node.
class Node:
    def __init__(self, val: Optional[int] = None, children: Optional[List['Node']] = None):
        self.val = val
        self.children = children
"""

class Solution:
    def maxDepth(self, root: 'Node') -> int:
        res = 0
        queue = deque([root])
        while queue:
            res += 1
            for _ in range(len(queue)):
                node = queue.popleft()
                for child in node.children:
                    queue.append(child)
        return res
