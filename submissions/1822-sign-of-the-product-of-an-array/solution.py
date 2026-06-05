class Solution:
    def arraySign(self, nums: List[int]) -> int:
        if 0 in nums:
            return 0
        p = 1
        for n in nums:
            p *= n
        if p > 0:
            return 1
        return -1
