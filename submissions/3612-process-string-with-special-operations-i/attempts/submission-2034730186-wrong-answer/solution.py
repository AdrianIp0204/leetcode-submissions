class Solution:
    def processStr(self, s: str) -> str:
        res = []
        for c in s:
            if c == "*": 
                if len(res) > 0:
                    res.pop()
            elif c == "#":
                res.extend(res)
            elif c == "%":
                res.sort(reverse=True)
            else:
                res.append(c)
        return "".join(res)
