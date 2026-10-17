# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pathSum(self, root: TreeNode | None, targetSum: int) -> list[list[int]]:

        if not root:
            return []

        res = []
        def dfs(node, path, curr):
            if curr == targetSum and not node.left and not node.right:
                res.append(path.copy())
                return

            for child in [node.left, node.right]:
                if child:
                    path.append(child.val)
                    dfs(child, path, curr + child.val)
                    path.pop()

        dfs(root, [root.val], root.val)
        return res
