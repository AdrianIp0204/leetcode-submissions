class Solution:
    def diStringMatch(self, s: str) -> List[int]:
        upper = len(s)
        lower = 0
        res = []
        for w in s:
            if w == "I":
                res.append(lower)
                lower += 1
            else:
                res.append(upper)
                upper -= 1
        res.append(upper)
        return res
