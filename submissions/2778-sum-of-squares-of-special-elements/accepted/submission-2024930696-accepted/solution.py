class Solution:
    def sumOfSquares(self, nums: List[int]) -> int:
        res = 0
        n = len(nums)
        for i, x in enumerate(nums):
            if n % (i+1) == 0:
                res += x*x
        return res
