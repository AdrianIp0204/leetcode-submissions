class Solution:
    def alternatingSum(self, nums: List[int]) -> int:
        res=0
        for i in range(len(nums)):
            if i%2:
                res -= nums[i]
            else:
                res += nums[i]
        return res
