from functools import cache
class Solution:
    def climbStairs(self, n: int, costs: List[int]) -> int:
        @cache
        def dp(i):
            if i == n:
                return 0
            if i > n:
                return float('inf')
            
            tmp = float('inf')
            for j in (1,2,3):
                nxt = i + j
                if nxt <= n:
                    tmp = min(tmp, dp(nxt) + costs[nxt-1] + pow(j, 2))
            return tmp

        return dp(0)
