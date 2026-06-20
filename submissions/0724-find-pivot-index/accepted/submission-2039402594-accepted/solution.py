class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        return next((i for i in range(len(nums)) if sum(nums[:i]) == sum(nums[i+1:])), -1)
