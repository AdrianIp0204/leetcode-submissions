from functools import cache
class Solution:
    def rob(self, nums: list[int]) -> int:
        n = len(nums)
        @cache
        def search(i):
            if i >= n:
                return 0
            return max(nums[i] + search(i + 2), search(i + 1))
        return search(0)
