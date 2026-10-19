class Solution:
    def equalPairs(self, grid: list[list[int]]) -> int:
        n = len(grid)
        res = 0
        for r in range(n):
            for c in range(n):
                if all(grid[r][i] == grid[i][c] for i in range(n)):
                    res += 1
        return res
