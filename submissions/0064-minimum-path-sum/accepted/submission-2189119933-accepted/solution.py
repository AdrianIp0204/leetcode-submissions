class Solution:
    def minPathSum(self, grid: list[list[int]]) -> int:
        # can only from up or left grid[i, j] + min()
        m, n = len(grid), len(grid[0])

        if m >= n:
            dp = list(accumulate(grid[0]))
            for i in range(1, m):
                for j in range(n):
                    if j != 0:
                        dp[j] = grid[i][j] + min(dp[j], dp[j-1])
                    else:
                        dp[j] += grid[i][j]
            return dp[n-1]
        else:
            dp = list(accumulate([grid[i][0] for i in range(m)]))
            for j in range(1, n):
                for i in range(m):
                    if i != 0:
                        dp[i] = grid[i][j] + min(dp[i], dp[i-1])
                    else:
                        dp[i] += grid[i][j]
            return dp[m-1]
