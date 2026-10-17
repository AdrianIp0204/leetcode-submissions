# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: TreeNode | None) -> bool:
        tmp = []

        def dfs(node):
            if not node:
                return
            
            dfs(node.left)
            tmp.append(node.val)
            dfs(node.right)
            
        dfs(root)
        return all(tmp[i] < tmp[i+1] for i in range(len(tmp) - 1))
