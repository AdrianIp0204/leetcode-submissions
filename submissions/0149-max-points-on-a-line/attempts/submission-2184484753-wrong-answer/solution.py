from collections import defaultdict
class Solution:
    def maxPoints(self, points: list[list[int]]) -> int:
        slopes = defaultdict(set)
        vertical = defaultdict(set)
        horizontal = defaultdict(set)
        n = len(points)

        for i in range(n-1):
            for j in range(i + 1, n):
                dx, dy = points[j][0] - points[i][0], points[j][1] - points[i][1]
                if dx == 0:
                    vertical[dy].add(tuple(points[i]))
                    vertical[dy].add(tuple(points[j]))
                elif dy == 0:
                    horizontal[dx].add(tuple(points[i]))
                    horizontal[dx].add(tuple(points[j]))
                else:
                    slopes[dy/dx].add(tuple(points[i]))
                    slopes[dy/dx].add(tuple(points[j]))

        res = 2
        for c in [slopes, vertical, horizontal]:
            res = max(res, len(max(c.values(), key=len, default=set())))
        return res
