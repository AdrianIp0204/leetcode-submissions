class Solution:
    def largestLocal(self, grid: list[list[int]]) -> list[list[int]]:
        height, width = len(grid) - 1, len(grid[0]) - 1
        res = []
        for h in range(height + 1):
            if 0 < h < height:
                tmp = []
                for w in range(width + 1):
                    if 0 < w < width:
                        tmp.append(max(grid[i][j] for i in range(h - 1, h + 2) for j in range(w - 1, w + 2)))
                res.append(tmp)
        return res
