class Solution:
    def minOperations(self, nums: List[int], x: int, k: int) -> int:
        n = len(nums)
        l = n - x + 1
        cost = [0] * (l)

        for i in range(l):
            tmp = sorted(nums[i: i + x])
            median = tmp[x//2]
            for num in tmp:
                cost[i] += abs(num - median)

        dp = [[float('inf')] * (k+1) for _ in range(n + 1)]

        for i in range(n+1):
            dp[i][0] = 0

        for i in range(1, n + 1):
            for j in range(1, k + 1):
                dp[i][j] = dp[i-1][j]

                if i >= x:
                    dp[i][j] = min(dp[i][j], dp[i-x][j-1] + cost[i-x])

        return dp[n][k]
