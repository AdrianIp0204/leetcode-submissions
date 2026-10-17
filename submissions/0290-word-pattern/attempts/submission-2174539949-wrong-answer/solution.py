class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        wap = {}
        for p, c in zip(pattern, s.split()):
            if p not in wap:
                wap[p] = c
            elif wap[p] != c:
                return False
        return True
