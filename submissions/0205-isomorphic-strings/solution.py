class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        sap = {}
        used = set()
        for a, b in zip(s, t):
            if a not in sap:
                if b in used:
                    return False
                sap[a] = b
                used.add(b)
            elif sap[a] != b:
                return False
        return True
