class Solution:
    def maxSubArray(self, nums: list[int]) -> int:
        l = len(nums)
        if l == 1:
            return nums[0]

        res = float('-inf')
        for i in range(l):
            curr = nums[i]
            for j in range(l):
                if i != j:
                    curr += nums[j]
                    res = max(res, curr)
        return res
