class Solution:
    def findGCD(self, nums: List[int]) -> int:
        MIN = min(nums)
        MAX = max(nums)
        for i in range(MIN, 0, -1):
            if MIN % i ==0 and MAX % i == 0:
                return i
