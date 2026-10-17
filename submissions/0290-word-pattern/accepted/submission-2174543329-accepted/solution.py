class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        wap = {}
        ss = s.split()
        if len(pattern) != len (ss):
            return False
        for p, c in zip(pattern, ss):
            if p not in wap:
                if c in wap.values():
                    return False
                wap[p] = c
            elif wap[p] != c:
                return False
        return True
