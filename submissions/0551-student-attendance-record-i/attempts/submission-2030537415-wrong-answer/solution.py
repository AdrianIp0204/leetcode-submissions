class Solution:
    def checkRecord(self, s: str) -> bool:
        sc = Counter(s)
        return True if sc['A'] < 2 and sc['L'] < 3 else False
