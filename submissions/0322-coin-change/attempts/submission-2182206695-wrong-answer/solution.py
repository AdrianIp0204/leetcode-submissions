from heapq import heapify, heappop
class Solution:
    def coinChange(self, coins: list[int], amount: int) -> int:
        coins = [-n for n in coins]
        heapify(coins)
        res = 0
        while coins:
            d, r = divmod(amount, -heappop(coins))
            res += d
            if r == 0:
                return res
            amount = r
        return -1
