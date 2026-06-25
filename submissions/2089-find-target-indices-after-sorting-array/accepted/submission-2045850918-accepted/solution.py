class Solution:
    def targetIndices(self, nums: List[int], t: int) -> List[int]:
        nums.sort()
        return [i for i in range(len(nums)) if nums[i] == t]
