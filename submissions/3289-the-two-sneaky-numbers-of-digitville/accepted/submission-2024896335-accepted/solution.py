class Solution:
    def getSneakyNumbers(self, nums: List[int]) -> List[int]:
        nap = {}
        res = []
        for n in nums:
            nap[n] = nap.get(n, 0) + 1
            if nap[n] > 1:
                res.append(n)
        return res
