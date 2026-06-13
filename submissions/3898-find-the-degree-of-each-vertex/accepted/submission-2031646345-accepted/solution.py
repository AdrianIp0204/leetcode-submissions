class Solution:
    def findDegrees(self, matrix: list[list[int]]) -> list[int]:
        res = []
        for m in matrix:
            tmp = 0
            for d in m:
                if d == 1:
                    tmp += 1
            res.append(tmp)
        return res
