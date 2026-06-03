class Solution:
    def numJewelsInStones(self, j: str, st: str) -> int:
        c = 0
        for s in st:
            if s in j:
                c += 1
        return c
