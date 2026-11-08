class Solution:
    def countServers(self, grid: list[list[int]]) -> int:
        h, w = len(grid), len(grid[0])
        res = 0
        for i in range(h):
            for j in range(w):
                if grid[i][j] == 1:
                    for r in [i-1, i+1]:
                        if 0 <= r < h and grid[r][j] == 1:
                            res += 1
                            break
                    else:
                        for c in [j-1, j+1]:
                            if 0 <= c < w and grid[i][c] == 1:
                                res+=1
                                break
        return res
