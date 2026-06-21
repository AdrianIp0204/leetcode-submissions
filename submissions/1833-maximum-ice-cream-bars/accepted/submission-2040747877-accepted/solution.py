import heapq
class Solution:
    def maxIceCream(self, costs: List[int], coins: int) -> int:
        heapq.heapify(costs)
        res = 0
        while costs and coins:
            if costs[0] <= coins:
                coins -= heapq.heappop(costs)
                res += 1
            else:
                break
        return res
