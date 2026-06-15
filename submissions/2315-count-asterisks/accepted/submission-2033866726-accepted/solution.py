class Solution:
    def countAsterisks(self, s: str) -> int:
        sist = s.split("|")
        res = 0
        for i in range(0, len(sist), 2):
            res += sist[i].count("*")
        return res
