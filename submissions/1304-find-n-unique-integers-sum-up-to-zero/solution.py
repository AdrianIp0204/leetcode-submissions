class Solution:
    def sumZero(self, n: int) -> List[int]:
        res = []
        m = n//2 + 1
        for i in range(1, m):
            res.append(i)
            res.append(-i)
        if n % 2 == 1:
            res.append(0)
        return res
