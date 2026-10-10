# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def preorderTraversal(self, root: TreeNode | None) -> list[int]:
        if not root:
            return []
    
        res = []
        stack = [root]

        while stack:
            now = stack.pop()
            res.append(now.val)

            if now.right:
                stack.append(now.right)

            if now.left:
                stack.append(now.left)

        return res
