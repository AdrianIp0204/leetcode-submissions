class Solution:
    def maxSubArray(self, nums: list[int]) -> int:
        l = len(nums)
        res = float('-inf')
        for i in range(l):
            curr = nums[i]
            res = max(res, curr)
            for j in range(l):
                if i != j:
                    curr += nums[j]
                    res = max(res, curr)
        return res
