class Solution:
    def findThePrefixCommonArray(self, A: List[int], B: List[int]) -> List[int]:
        c = 0
        res = []
        seen = set()
        for a, b in zip(A, B):
            for v in (a,b):
                if v not in seen:
                    seen.add(v)
                else:
                    c += 1
            res.append(c)
        return res
