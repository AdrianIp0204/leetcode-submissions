from collections import deque
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxLevelSum(self, root: TreeNode | None) -> int:
        res = (float('-inf'), float('-inf'))
        queue = deque([root])
        level = 0
        while queue:
            tmp = 0
            for _ in range(len(queue)):
                node = queue.popleft()
                tmp += node.val
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            level += 1
            if tmp == res[0]:
                res = min(res, (tmp, level))
            else:
                res = max(res, (tmp, level))

        return res[1]
