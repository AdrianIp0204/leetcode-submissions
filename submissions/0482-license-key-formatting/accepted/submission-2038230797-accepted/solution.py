class Solution:
    def licenseKeyFormatting(self, s: str, k: int) -> str:
        tmp = []
        res = []
        for c in reversed(s):
            if c != '-':
                if c.isalpha():
                    tmp.append(c.upper())
                else:
                    tmp.append(c)
            if len(tmp) == k:
                res.extend(tmp)
                res.append('-')
                tmp = []
        res.extend(tmp)
        if len(res) > 1 and res[-1] == '-':
            res.pop()
        return "".join(reversed(res))
