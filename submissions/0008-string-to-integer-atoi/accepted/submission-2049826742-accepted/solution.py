class Solution:
    def myAtoi(self, s: str) -> int:
        s = s.strip()
        if len(s) == 0:
            return 0
        neg = False
        res = 0
        if s[0] == '-':
            s = s[1:]
            neg = True
        elif s[0] == '+':
            s = s[1:]
        for n in s:
            if n.isnumeric():
                res = res * 10 + int(n)
            else:
                break
        if neg:
            res *= -1
            if res < -2147483648:
                res = -2147483648
        elif res > 2147483647:
            res = 2147483647
        return res
