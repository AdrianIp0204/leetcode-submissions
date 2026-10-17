# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def leafSimilar(self, root1: TreeNode | None, root2: TreeNode | None) -> bool:
        
        l = []

        def dfs(node):
            if not node.left and not node.right:
                l.append(node.val)
                return
            if node.left:
                dfs(node.left)
            if node.right:
                dfs(node.right)
        
        dfs(root1)
        l1 = l
        l = []
        dfs(root2)
        return l1 == l
