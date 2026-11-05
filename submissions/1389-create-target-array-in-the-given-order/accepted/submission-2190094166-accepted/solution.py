class Solution:
    def createTargetArray(self, nums: list[int], index: list[int]) -> list[int]:
        res = []
        for n, i in zip(nums, index):
            res.insert(i, n)
        return res
