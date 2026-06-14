class Solution:
    def countKDifference(self, nums: List[int], k: int) -> int:
        res = 0
        n = len(nums)
        
        for i in range(n):
            for j in range(i + 1, n):
                if abs(nums[i] - nums[j]) == k:
                    res += 1
                    
        return res
