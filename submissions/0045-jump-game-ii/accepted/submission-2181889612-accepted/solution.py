from functools import cache
class Solution:
    def jump(self, nums: list[int]) -> int:
        t = len(nums) - 1
        @cache
        def go(i):
            if i >= t:
                return 0
            if nums[i] == 0:
                return float('inf')
            
            return 1 + min(go(i + k) for k in range(1, nums[i]+1))

        return go(0)
