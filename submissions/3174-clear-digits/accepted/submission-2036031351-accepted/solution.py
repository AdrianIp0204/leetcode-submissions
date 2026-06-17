class Solution:
    def clearDigits(self, s: str) -> str:
        res = []
        for n in s:
            if n.isdigit():
                if len(res) > 0:
                    res.pop()
            else:
                res.append(n)
        return "".join(res)
