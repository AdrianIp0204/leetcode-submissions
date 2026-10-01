from collections import deque
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minDepth(self, root: TreeNode | None) -> int:
        if not root:
            return 0

        queue = deque([root])
        res = 0
        
        while queue:
            res += 1
            l = len(queue)
            for _ in range(l):
                curr = queue.popleft()

                if not curr.left and not curr.right:
                    return res
                else:
                    if curr.left:
                        queue.append(curr.left)
                    if curr.right:
                        queue.append(curr.right)
