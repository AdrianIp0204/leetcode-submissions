class Solution:
    def returnToBoundaryCount(self, nums: List[int]) -> int:
        res = 0
        c = nums[0]
        for i in range(1, len(nums)):
            c += nums[i]
            if c == 0:
                res += 1
        return res
