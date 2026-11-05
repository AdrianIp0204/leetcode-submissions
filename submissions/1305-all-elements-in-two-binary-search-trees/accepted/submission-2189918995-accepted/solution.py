# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def getAllElements(self, root1: TreeNode | None, root2: TreeNode | None) -> list[int]:
        tmp = []

        def search(node):
            if node.left:
                search(node.left)
            
            tmp.append(node.val)

            if node.right:
                search(node.right)

        if root1:
            search(root1)
        n1 = l2 = len(tmp)
        if root2:
            search(root2)
        n2 = len(tmp)

        res = []
        l1 = 0
        while l1 < n1 and l2 < n2:
            if tmp[l1] <= tmp[l2]:
                res.append(tmp[l1])
                l1 += 1
            else:
                res.append(tmp[l2])
                l2 += 1

        while l1 < n1:
            res.append(tmp[l1])
            l1 += 1

        while l2 < n2:
            res.append(tmp[l2])
            l2 += 1
        
        return res
