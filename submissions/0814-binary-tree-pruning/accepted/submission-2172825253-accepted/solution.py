# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pruneTree(self, root: TreeNode | None) -> TreeNode | None:
        

        def dfs(node):

            if not node:
                return None

            node.left = dfs(node.left)
            node.right = dfs(node.right)

            if (node.val == 1) or node.left or node.right:
                return node
            return None

        return dfs(root)
