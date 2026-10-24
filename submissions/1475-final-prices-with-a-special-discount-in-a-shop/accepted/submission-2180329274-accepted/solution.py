class Solution:
    def finalPrices(self, prices: list[int]) -> list[int]:
        l = len(prices)
        for i in range(l):
            for j in range(i + 1, l):
                if prices[i] >= prices[j]:
                    prices[i] = prices[i] - prices[j]
                    break
        return prices
