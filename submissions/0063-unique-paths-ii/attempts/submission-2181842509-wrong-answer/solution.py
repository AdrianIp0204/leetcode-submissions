class Solution:
    def uniquePathsWithObstacles(self, grid: list[list[int]]) -> int:
        res = 0
        h, w = len(grid), len(grid[0])
        target = (h-1, w-1)
        def dfs(i, j):
            nonlocal res
            if (i, j) == target:
                res += 1
                return
            
            if i + 1 < h and grid[i+1][j] != 1:
                dfs(i+1, j)

            if j + 1 < w and grid[i][j+1] != 1:
                dfs(i, j + 1)

        dfs(0, 0)
        return res
