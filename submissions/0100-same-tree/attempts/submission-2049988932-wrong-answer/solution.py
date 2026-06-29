# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        pl, ql = [], []
        def dfs(node, l):
            if node is None:
                return None
            dfs(node.left, l)
            l.append(node.val)
            dfs(node.right, l)
        dfs(p, pl)
        dfs(q, ql)
        return True if pl == ql else False
