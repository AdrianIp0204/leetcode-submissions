from bisect import bisect_left, bisect_right
class Solution:
    def searchRange(self, nums: list[int], target: int) -> list[int]:
        if target not in nums:
            return [-1, -1]  
        return [bisect_left(nums, target), bisect_right(nums, target) - 1]
