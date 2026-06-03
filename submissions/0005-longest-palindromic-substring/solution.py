class Solution:
    def longestPalindrome(self, s: str) -> str:
        tmp = []
        out = []
        l = len(s)
        c = 0
        for i in range(l):
            for j in range(i, l):
                tmp.append(s[j])
                if tmp == tmp[::-1]:
                    if len(tmp) > c:
                        c = len(tmp)
                        out = tmp.copy()
            tmp.clear()
        return "".join(out)
