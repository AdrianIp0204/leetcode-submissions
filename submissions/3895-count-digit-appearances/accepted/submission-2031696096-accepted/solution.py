class Solution:
    def countDigitOccurrences(self, nums: list[int], d: int) -> int:
        res = 0
        for n in nums:
            while n:
                if n%10==d:
                    res += 1
                n//=10
        return res
