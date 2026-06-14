class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        sap = {}
        for w1, w2 in zip(s, t):
            if sap.get(w1) is not None:
                if sap[w1] != w2:
                    return False
            else:
                sap[w1] = w2
        return True
