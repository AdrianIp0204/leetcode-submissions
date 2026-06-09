class Solution:
    def dominantIndex(self, nums: List[int]) -> int:
        m = max(nums)
        c = m/2
        for n in nums:
            if n > c and n != m:
                return -1
        return nums.index(m)
