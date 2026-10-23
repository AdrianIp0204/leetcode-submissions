# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minDiffInBST(self, root: TreeNode | None) -> int:
        tmp = []
        def search(node):
            
            if node.left:
                search(node.left)

            tmp.append(node.val)
            
            if node.right:
                search(node.right)
        search(root)
        res = float('inf')
        for i in range(1, len(tmp)):
            if res == 1:
                return 1
            res = min(res, abs(tmp[i]-tmp[i-1]))
        return res
