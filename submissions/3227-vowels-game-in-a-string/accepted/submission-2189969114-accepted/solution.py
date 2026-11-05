class Solution:
    def doesAliceWin(self, s: str) -> bool:
        return any(c in {'a', 'e', 'i', 'o', 'u'} for c in s)
