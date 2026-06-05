class Solution:
    def convert(self, s: str, n: int) -> str:
        if n == 1 or n > len(s):
            return s
        else:
            sep = (n-1)*2
            ls = len(s)
            out = ""
            for i in range(n):
                for j in range(i, ls, sep):
                    out += s[j]
                    if (i>0 and i<n-1 and j+sep-2*i < len(s)):
                        out+=s[j+2*(n-1)-2*i]
            return out
