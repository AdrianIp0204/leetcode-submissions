from functools import cache
class Solution:
    def uniquePathsWithObstacles(self, grid: list[list[int]]) -> int:

        h, w = len(grid), len(grid[0])
        target = (h-1, w-1)

        @cache
        def dfs(i, j):
            if i >= h or j >= w or grid[i][j] == 1:
                return 0

            if (i, j) == target:
                return 1
            
            return dfs(i+1, j) + dfs(i, j+1)


        return dfs(0, 0)
