import bisect
class Solution:
    def maximumCount(self, nums: list[int]) -> int:
        l = bisect_left(nums, 0)
        r = len(nums) - bisect_right(nums, 0)
        return max(l, r)
