class Solution:
    def countBits(self, n: int) -> list[int]:
        n += 1
        dp = [0] * n
        for i in range(1, n):
            dp[i] = dp[i & (i - 1)] + 1
        return dp
