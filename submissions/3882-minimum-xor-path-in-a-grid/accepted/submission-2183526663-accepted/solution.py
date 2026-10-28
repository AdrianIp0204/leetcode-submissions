class Solution:
    def minCost(self, grid: list[list[int]]) -> int:
        m, n = len(grid), len(grid[0])
        dp = [[set() for _ in range(n)] for _ in range(m)]
        
        for i in range(m-1, -1, -1):
            for j in range(n-1, -1, -1):
                if i == m-1 and j == n-1:
                    dp[m-1][n-1].add(grid[m-1][n-1])

                for x in dp[i+1][j] if i+1 < m else set():
                    dp[i][j].add(x ^ grid[i][j])

                for x in dp[i][j+1] if j+1 < n else set():
                    dp[i][j].add(x ^ grid[i][j])

        return min(dp[0][0])
