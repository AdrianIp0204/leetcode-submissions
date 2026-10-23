# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
        prev = None
        res = float('inf')
        def search(node):
            nonlocal prev
            nonlocal res
            if node.left:
                search(node.left)

            if prev is not None:
                res = min(res, node.val - prev)
            prev = node.val

            if node.right:
                search(node.right)
        search(root)
        return res
