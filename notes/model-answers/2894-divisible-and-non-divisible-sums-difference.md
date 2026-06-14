# Divisible and Non-divisible Sums Difference

- Pattern: arithmetic-series subtraction
- Original attempt: [submissions/2894-divisible-and-non-divisible-sums-difference](../../submissions/2894-divisible-and-non-divisible-sums-difference/)

## Model Solution

```python
class Solution:
    def differenceOfSums(self, n: int, m: int) -> int:
        total = n * (n + 1) // 2
        q = n // m
        divisible = m * q * (q + 1) // 2
        return total - 2 * divisible
```

## Why This Is The Model

The answer is `sum(non_divisible) - sum(divisible)`. Since `total` contains both
groups, replacing `sum(non_divisible)` with `total - divisible` gives
`total - 2 * divisible`. The multiple sum is just `m` times the triangular number
of `floor(n / m)`.

## Invariant

`divisible` is always the exact sum of all multiples of `m` in `[1, n]`, so the
final subtraction accounts for each divisible value once as removed from the
non-divisible side and once as the subtracted side.

## Complexity

- Time: O(1)
- Space: O(1)

## Review Prompt

Why does the formula subtract the divisible sum twice instead of once?
