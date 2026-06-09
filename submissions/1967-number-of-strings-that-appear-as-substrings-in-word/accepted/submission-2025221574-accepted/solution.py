class Solution:
    def numOfStrings(self, p: List[str], w: str) -> int:
        c = 0
        for a in p:
            if a in w:
                c += 1
        return c
