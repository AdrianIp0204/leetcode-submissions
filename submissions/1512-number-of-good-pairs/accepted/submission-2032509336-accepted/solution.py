class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        res = 0
        l = len(nums)
        for i, n in enumerate(nums):
            for j in range(i+1, l):
                if nums[j] == n:
                    res += 1
        return res
