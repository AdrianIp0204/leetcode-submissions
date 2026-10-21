class Solution:
    def firstStableIndex(self, nums: list[int], k: int) -> int:
        return next((i for i in range(len(nums)) if max(nums[0:i+ 1]) - min(nums[i:]) <= k), -1)
