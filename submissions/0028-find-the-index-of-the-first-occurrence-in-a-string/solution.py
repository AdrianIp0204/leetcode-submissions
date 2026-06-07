class Solution:
    def strStr(self, h: str, n: str) -> int:
        return -1 if n not in h else h.index(n)
