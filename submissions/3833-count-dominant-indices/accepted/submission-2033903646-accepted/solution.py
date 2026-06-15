class Solution:
    def dominantIndices(self, nums: List[int]) -> int:
        SUM = sum(nums)
        k = len(nums)
        res = 0
        
        for i in range(k - 1):
            SUM -= nums[i]
            c = k - 1 - i
            
            if nums[i] * c > SUM:
                res += 1
                
        return res
