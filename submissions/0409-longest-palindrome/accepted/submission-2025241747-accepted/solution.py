class Solution:
    def longestPalindrome(self, s: str) -> int:
        sap = {}
        mo, res = 0, 0
        odd = False
        for i in s:
            sap[i] = sap.get(i, 0) + 1
        for i in sap.values():
            if i % 2 == 0:
                res += i
            else:
                odd = True
                if i > 2:
                    res += i-1
        if odd:
            res += 1
        return res
