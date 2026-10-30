# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findFrequentTreeSum(self, root: TreeNode | None) -> list[int]:
        nap = defaultdict(int)
        def search(node):
            if not node.left and not node.right:
                nap[node.val] += 1
                return node.val
            
            left = search(node.left) if node.left else 0
            right = search(node.right) if node.right else 0

            curr = node.val + left + right

            nap[curr] += 1
            return curr
            
        search(root)

        n = max(nap.values())

        res = []
        for k, v in nap.items():
            if v == n:
                res.append(k)

        return res
