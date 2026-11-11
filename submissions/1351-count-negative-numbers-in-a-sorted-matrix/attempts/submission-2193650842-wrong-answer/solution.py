import bisect
class Solution:
    def countNegatives(self, grid: list[list[int]]) -> int:
        l = len(grid[0])
        res = 0
        for row in grid:
            if row[-1] >= 0:
                continue
            res += l - bisect_left(row, 0, key=lambda x: -x)
        return res
