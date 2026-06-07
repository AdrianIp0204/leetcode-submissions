class Solution:
    def findPermutationDifference(self, s: str, t: str) -> int:
        sap = {}
        res = 0
        for i, x in enumerate(s):
            sap[x] = i
        for i, x in enumerate(t):
            res += abs(i - sap[x])
        return res
