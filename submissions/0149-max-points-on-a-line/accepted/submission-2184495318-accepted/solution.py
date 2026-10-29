from collections import defaultdict
from math import gcd
class Solution:
    def maxPoints(self, points: list[list[int]]) -> int:

        n = len(points)
        res = 0

        for i in range(n):
            tmp = defaultdict(int)
            vertical = 1
            horizontal = 1
            for j in range(n):
                if i != j:
                    dx, dy = points[i][0] - points[j][0], points[i][1] - points[j][1]
                    if dx == 0:
                        vertical += 1
                    elif dy == 0:
                        horizontal += 1
                    else:
                        tmp[dy/dx] += 1
            res = max(res, vertical, horizontal, max(tmp.values(), default=0) + 1)
        return res
