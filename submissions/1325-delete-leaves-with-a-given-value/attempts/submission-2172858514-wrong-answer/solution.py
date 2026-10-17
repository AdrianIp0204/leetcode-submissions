# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def removeLeafNodes(self, root: TreeNode | None, target: int) -> TreeNode | None:
        def bfs(node):
            if not node:
                return None
            node.left = bfs(node.left)
            node.right = bfs(node.right)
            if node.val == target and not node.left and not node.right:
                return None
            return node
        bfs(root)
        return root
