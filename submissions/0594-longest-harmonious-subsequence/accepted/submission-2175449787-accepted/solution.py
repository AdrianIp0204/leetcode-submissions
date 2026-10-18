class Solution:
    def findLHS(self, nums: list[int]) -> int:
        res = 0
        nap = Counter(nums)
        for n in nap:
            if n + 1 in nap:
                res = max(res, nap[n] + nap[n+1])
        return res
