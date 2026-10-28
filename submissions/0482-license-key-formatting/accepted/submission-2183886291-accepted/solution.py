class Solution:
    def licenseKeyFormatting(self, s: str, k: int) -> str:
        res = []
        curr = 0
        for i in range(len(s)- 1, -1, -1):
            if s[i] != '-':
                if curr == k:
                    res.append('-')
                    curr = 0

                res.append(s[i].upper())
                curr += 1
        return ''.join(res)[::-1]
