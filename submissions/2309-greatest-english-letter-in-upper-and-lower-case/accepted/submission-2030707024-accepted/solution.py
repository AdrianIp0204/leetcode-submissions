class Solution:
    def greatestLetter(self, s: str) -> str:
        wet = set(i for i in s if i.islower())
        res = 0
        for w in wet:
            up = w.upper()
            if up in s:
                if ord(up) > res:
                    res = ord(up)
        return "" if res == 0 else chr(res)
