from collections import deque
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: TreeNode | None) -> bool:
        queue = deque([root])
        while queue:
            tmp = []
            for _ in range(len(queue)):
                node = queue.popleft()
                if not node:
                    tmp.append(None)
                else:
                    tmp.append(node.val)
                    queue.append(node.left)
                    queue.append(node.right)

            if tmp != tmp[::-1]:
                return False
        return True
