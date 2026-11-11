class Solution:
    def minimumCost(self, cost1: int, cost2: int, costBoth: int, need1: int, need2: int) -> int:
        MIN, MAX = min((need1, cost1), (need2, cost2)), max((need1, cost1), (need2, cost2))
        return min(need1 * cost1 + need2 * cost2,
                    MIN[0] * costBoth + (MAX[0] - MIN[0]) * MAX[1],
                    MAX[0] * costBoth)
