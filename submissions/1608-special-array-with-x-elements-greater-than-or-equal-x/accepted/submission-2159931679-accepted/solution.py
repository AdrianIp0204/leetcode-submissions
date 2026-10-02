import bisect

class Solution:
    def specialArray(self, nums: list[int]) -> int:
        nums.sort()
        l = len(nums)
        for i in range(l):
            if l - bisect_right(nums, i) == i + 1:
                return i + 1
        return -1
