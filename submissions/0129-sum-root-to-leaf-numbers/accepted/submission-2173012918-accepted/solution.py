# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumNumbers(self, root: TreeNode | None) -> int:
        res = 0
        def dfs(node, curr):
            nonlocal res
            curr += node.val
            if not node.left and not node.right:
                res += curr
                return
            if node.left:
                dfs(node.left, curr*10)
            if node.right:
                dfs(node.right, curr*10)
        dfs(root, 0)
        return res
