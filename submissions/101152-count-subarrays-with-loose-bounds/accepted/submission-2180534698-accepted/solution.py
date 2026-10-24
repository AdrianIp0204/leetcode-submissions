class Solution:
    def countSubarrays(self, nums: list[int], minK: int, maxK: int) -> int:
        res = 0
        l = len(nums)
        tmp = 0
        for n in nums:
            if minK <= n <= maxK:
                tmp += 1
                res += tmp
            else:
                tmp = 0

        return res
