class Solution:
    def processStr(self, s: str, k: int) -> str:
        res = []
        for c in s:
            if c == "*":
                if len(res) > 0:
                    res.pop()
            elif c == "#":
                res.extend(res)
            elif c == "%":
                res = res[::-1]
            else:
                res.append(c)
        if k >= len(res):
            return "."
        return res[k]
