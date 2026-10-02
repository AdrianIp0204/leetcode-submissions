class Solution:
    def maxSubArray(self, nums: list[int]) -> int:
        res = curr = nums[0]

        for n in nums[1:]:
            curr = max(n, curr + n)
            res = max(res, curr)

        return res
