# Richest Customer Wealth

- Pattern: row-sum maximum
- Original attempt: [submissions/1672-richest-customer-wealth](../../submissions/1672-richest-customer-wealth/)

## Model Solution

```python
class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        richest = 0

        for customer in accounts:
            richest = max(richest, sum(customer))

        return richest
```

## Why This Is The Model

Each row is one customer's total wealth. Summing the row gives that customer's
score, and keeping the maximum seen so far returns the richest customer's wealth
without storing every row sum.

## Invariant

After each row is processed, `richest` equals the largest wealth among all
customers seen so far.

## Complexity

- Time: O(mn), for all account entries
- Space: O(1)

## Review Prompt

Why is it enough to keep only the best row sum instead of a list of all row sums?
