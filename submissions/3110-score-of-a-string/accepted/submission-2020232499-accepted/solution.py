class Solution:
    def scoreOfString(self, s: str) -> int:
        e = s[:-1]
        r = 0
        for i, c in enumerate(e):
            r += abs(ord(c) - ord(s[i+1]))
        return r
