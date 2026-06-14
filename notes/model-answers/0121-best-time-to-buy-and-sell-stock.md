# Best Time to Buy and Sell Stock

- Pattern: one-pass minimum tracking
- Original attempt: [submissions/0121-best-time-to-buy-and-sell-stock](../../submissions/0121-best-time-to-buy-and-sell-stock/)

## Model Solution

```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_price = prices[0]
        best = 0

        for price in prices[1:]:
            best = max(best, price - min_price)
            min_price = min(min_price, price)

        return best
```

## Why This Is The Model

For each day, the only useful buy price is the cheapest earlier price. The
model answer stores that single fact instead of checking every buy/sell pair.

## Invariant

Before processing `price`, `min_price` is the lowest price from earlier days and
`best` is the best profit seen so far.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why should the algorithm update `best` before letting today's price become the
new `min_price`?
