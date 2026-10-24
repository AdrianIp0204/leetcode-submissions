# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sortedArrayToBST(self, nums: list[int]) -> TreeNode | None:
        def build(nums):
            if not nums:
                return

            mid = len(nums) // 2
            node = TreeNode(nums[mid])
            node.left = build(nums[:mid])
            node.right = build(nums[mid+1:])
            return node
        return build(nums)
