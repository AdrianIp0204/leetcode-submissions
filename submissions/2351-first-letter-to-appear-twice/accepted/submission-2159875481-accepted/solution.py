class Solution:
    def repeatedCharacter(self, s: str) -> str:
        wap = {}

        for c in s:
            wap[c] = wap.get(c, 0) + 1
            if wap[c] == 2:
                return c
