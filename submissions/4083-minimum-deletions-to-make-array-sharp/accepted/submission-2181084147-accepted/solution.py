class Solution:
    def minDeletions(self, nums: list[int]) -> int:
        res = 0
        for i in range(1, len(nums)):
            if nums[i] == nums[i-1]:
                res += 1
        return res
