class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        c, m = 0, 0
        while nums:
            if nums.pop() == 1:
                c += 1
            else:
                if c > m:
                    m = c
                c = 0
        return c if c > m else m
