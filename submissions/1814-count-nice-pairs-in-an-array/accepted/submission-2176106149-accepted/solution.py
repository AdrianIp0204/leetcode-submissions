from collections import Counter
from math import comb
class Solution:
    def countNicePairs(self, nums: list[int]) -> int:
        nap = Counter(nums)
        res = 0
        mapp = {}

        def rev(num):
            res = 0

            while num:
                res = res*10 + num % 10
                num //= 10
            
            return res

        for k, v in nap.items():
            key = k-rev(k)
            mapp[key] = mapp.get(key, 0) + v

        for v in mapp.values():
            if v > 1:
                res += comb(v,2)

        return res % 1000000007
