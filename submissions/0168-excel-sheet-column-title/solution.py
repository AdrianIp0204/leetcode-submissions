class Solution:
    def convertToTitle(self, n: int) -> str:
        res = []
        while n:
            rem = 26 if n%26 == 0 else n%26
            res.append(chr(rem + 64))
            n = (n - rem)//26
        res.reverse()
        return "".join(res)
