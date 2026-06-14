class Solution:
    def intersection(self, nums: List[List[int]]) -> List[int]:
        net = set(nums[0])
        for i in range(1, len(nums)):
            net &= set(nums[i])
        return list(sorted(net))
