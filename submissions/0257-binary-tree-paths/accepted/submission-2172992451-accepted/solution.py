# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def binaryTreePaths(self, root: TreeNode | None) -> list[str]:
        res = []
        def dfs(node, path):
            if not node.left and not node.right:
                res.append(path.copy())
            for child in [node.left, node.right]:
                if child:
                    path.append(str(child.val))
                    dfs(child, path)
                    path.pop()
        dfs(root, [str(root.val)])
        return ['->'.join(path) for path in res]
