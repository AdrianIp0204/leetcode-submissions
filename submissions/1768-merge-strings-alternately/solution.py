class Solution:
    def mergeAlternately(self, w1: str, w2: str) -> str:
        res = ""
        l1,l2 = len(w1), len(w2)
        for i, j in zip(w1, w2):
            res += i + j
        if l1 == l2:
            return res
        elif l1 > l2:
            for i in range(l2, l1):
                res += w1[i]
            return res
        for i in range(l1, l2):
            res += w2[i]
        return res
