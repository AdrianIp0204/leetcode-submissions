from functools import cache
class Solution:
    def findTargetSumWays(self, nums: list[int], target: int) -> int:
        n = len(nums)

        @cache
        def search(i, curr):
            if i == n:
                return int(curr == target)
            return search(i+1, curr - nums[i]) + search(i+1, curr + nums[i])

        return search(0,0)
