class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        nap = {}
        for i, n in enumerate(nums):
            if target - n in nap:
                return [nap[target-n], i]
            nap[n] = i
