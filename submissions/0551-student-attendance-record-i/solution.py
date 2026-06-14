class Solution:
    def checkRecord(self, s: str) -> bool:
        sc = Counter(s)
        return True if sc['A'] < 2 and "LLL" not in s else False
