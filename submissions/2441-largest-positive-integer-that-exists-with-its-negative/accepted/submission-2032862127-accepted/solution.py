class Solution:
    def findMaxK(self, nums: List[int]) -> int:
        nums.sort(reverse=True)
        for n in nums:
            if n > 0 and -n in nums:
                return n
        return -1
