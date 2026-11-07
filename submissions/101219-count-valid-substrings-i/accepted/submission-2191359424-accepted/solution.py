class Solution:
    def countValidSubstrings(self, s: str) -> int:
        n = len(s)
        res = 0
        l = 0

        for r in range(n):
            if r >= 2 and s[r-2] == 'a' and s[r-1] == 'b' and s[r] == 'c':
                l = r - 1
            res += r - l + 1

        return res
