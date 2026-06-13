class Solution:
    def countDigitOccurrences(self, nums: list[int], d: int) -> int:
        res = 0
        for n in nums:
            t = 0
            while n:
                n//=10
                t += 1
            if t == d:
                res += 1
        return res
