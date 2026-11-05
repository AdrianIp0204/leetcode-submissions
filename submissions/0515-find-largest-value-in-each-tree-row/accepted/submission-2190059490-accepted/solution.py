from collections import deque
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def largestValues(self, root: TreeNode | None) -> list[int]:
        if not root:
            return []
        q = deque([root])
        res = []
        while q:
            tmp = float('-inf')
            for _ in range(len(q)):
                node = q.popleft()
                tmp = max(tmp, node.val)
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            res.append(tmp)
        return res
