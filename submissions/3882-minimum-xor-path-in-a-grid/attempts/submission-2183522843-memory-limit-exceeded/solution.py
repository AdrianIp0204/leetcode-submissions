from functools import cache
class Solution:
    def minCost(self, grid: list[list[int]]) -> int:
        m, n = len(grid) - 1, len(grid[0]) - 1

        @cache
        def search(i, j, curr):
            if (i, j) == (m, n):
                return curr

            down = search(i+1, j, curr ^ grid[i+1][j]) if i + 1 <= m else float('inf')
            right = search(i, j+1, curr ^ grid[i][j+1]) if j + 1 <= n else float('inf')

            return min(down, right)
            
        return search(0, 0, grid[0][0])
