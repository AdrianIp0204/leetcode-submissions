class Solution:
    def firstStableIndex(self, nums: list[int], k: int) -> int:
        n = len(nums)
        m = 1000000001
        for i in range(n):
            tmp = max(nums[0:i+1]) - min(nums[i:n])
            if tmp <= k:
                return i 
        return -1
