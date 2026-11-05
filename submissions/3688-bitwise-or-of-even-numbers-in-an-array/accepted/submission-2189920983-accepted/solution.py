class Solution:
    def evenNumberBitwiseORs(self, nums: List[int]) -> int:
        res = 0
        for n in nums:
            if n%2 == 0:
                res |= n
        return res
