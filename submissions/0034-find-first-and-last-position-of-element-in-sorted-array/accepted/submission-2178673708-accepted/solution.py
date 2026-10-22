from bisect import bisect_left, bisect_right
class Solution:
    def searchRange(self, nums: list[int], target: int) -> list[int]:
        idx = bisect_left(nums, target)
        if idx < len(nums) and nums[idx] == target:
            return [idx, bisect_right(nums, target) - 1]
        return [-1, -1]
