class Solution:
    def majorityElement(self, nums: list[int]) -> int:
        half = len(nums) // 2
        nap = {}
        for n in nums:
            nap[n] = nap.get(n, 0) + 1
            if nap[n] > half:
                return n
