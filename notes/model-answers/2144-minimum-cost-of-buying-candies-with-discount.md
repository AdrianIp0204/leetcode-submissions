# Minimum Cost of Buying Candies With Discount

- Pattern: greedy sorted grouping
- Original attempt: [submissions/2144-minimum-cost-of-buying-candies-with-discount](../../submissions/2144-minimum-cost-of-buying-candies-with-discount/)

## Model Solution

```python
class Solution:
    def minimumCost(self, cost: List[int]) -> int:
        cost.sort(reverse=True)
        total = 0

        for i, price in enumerate(cost):
            if i % 3 != 2:
                total += price

        return total
```

## Why This Is The Model

Sorting from high to low groups the most expensive candies together. In each
group of three, the third candy is the free one, so paying for the first two of
every group maximizes the discount and minimizes the total cost.

## Invariant

After each full group of three sorted candies, the paid total is minimal for
those candies because the cheapest candy in that group was the free one.

## Complexity

- Time: O(n log n)
- Space: O(1) extra, aside from sorting

## Review Prompt

Why would sorting ascending make the discount worse?
