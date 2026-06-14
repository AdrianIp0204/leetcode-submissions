class Solution:
    def minElement(self, nums: List[int]) -> int:
        res = float('inf')
        for n in nums:
            tmp = 0
            while n:
                tmp += n%10
                n //= 10
            if tmp < res:
                res = tmp
        return res
