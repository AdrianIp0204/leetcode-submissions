class Solution:
    def kidsWithCandies(self, c: List[int], e: int) -> List[bool]:
        res = []
        m = max(c)
        for i in c:
            if i+e>=m:
                res.append(True)
            else:
                res.append(False)
        return res
