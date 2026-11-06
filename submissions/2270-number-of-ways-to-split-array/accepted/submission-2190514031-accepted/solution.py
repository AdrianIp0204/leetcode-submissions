class Solution:
    def waysToSplitArray(self, nums: list[int]) -> int:
        l, r = nums[0], sum(nums) - nums[0]
        res = 0
        for i in range(1, len(nums)):
            if l >= r:
                res += 1
            l += nums[i]
            r -= nums[i]
        return res
