from collections import deque

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: TreeNode | None) -> list[list[int]]:
        
        queue = deque([root])

        if not root:
            return []

        res = [[root.val]]

        def search():
            curr = queue.popleft()
            tmp = []

            if curr.left:
                tmp.append(curr.left.val)
                queue.append(curr.left)

            if curr.right:
                tmp.append(curr.right.val)
                queue.append(curr.right)
            
            if tmp:
                res.append(tmp)

        while queue:
            search()

        return res
