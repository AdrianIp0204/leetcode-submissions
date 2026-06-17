class Solution:
    def finalString(self, s: str) -> str:
        res = []
        for c in s:
            if c == "i":
                if len(res) > 1:
                    res.reverse()
            else:
                res.append(c)
        return "".join(res)
