# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def createBinaryTree(self, d: List[List[int]]) -> Optional[TreeNode]:
        nodes = {}
        children = set()

        def get_node(val):
            if val not in nodes:
                nodes[val] = TreeNode(val)
            return nodes[val]

        for parent, child, isLeft in d:
            parent_node = get_node(parent)
            child_node = get_node(child)

            children.add(child)

            if isLeft == 1:
                parent_node.left = child_node
            else:
                parent_node.right = child_node

        for val in nodes:
            if val not in children:
                return nodes[val]
