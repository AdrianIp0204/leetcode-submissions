from functools import cache
class Solution:
    def minCostClimbingStairs(self, cost: list[int]) -> int:
        n = len(cost)
        @cache
        def search(i):
            if i >= n:
                return 0
            return cost[i] + min(search(i+1), search(i+2))
        return min(search(0), search(1))
