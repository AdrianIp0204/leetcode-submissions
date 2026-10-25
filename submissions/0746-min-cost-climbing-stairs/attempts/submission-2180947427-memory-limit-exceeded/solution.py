from functools import cache
class Solution:
    def minCostClimbingStairs(self, cost: list[int]) -> int:
        n = len(cost) - 1
        @cache
        def search(i, c):
            if i > n:
                return c
            return min(search(i+1, c+cost[i]), search(i+2, c+cost[i]))
        return min(search(0, 0), search(1, 0))
