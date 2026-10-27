class Solution:
    def createGrid(self, m: int, n: int) -> list[str]:
        res = ['.'*n]
        l = n - 1
        for _ in range(m-1):
            res.append('#' * l + '.')
        return res
