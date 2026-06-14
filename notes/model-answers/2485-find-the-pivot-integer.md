# Find the Pivot Integer

- Pattern: arithmetic-series square test
- Original attempt: [submissions/2485-find-the-pivot-integer](../../submissions/2485-find-the-pivot-integer/)

## Model Solution

```python
class Solution:
    def pivotInteger(self, n: int) -> int:
        total = n * (n + 1) // 2
        root = isqrt(total)

        return root if root * root == total else -1
```

## Why This Is The Model

If `x` is the pivot, the sum from `1` through `x` equals the sum from `x`
through `n`. Since both sides include `x`, this simplifies to `x * x` being the
total sum from `1` through `n`. Therefore the pivot exists exactly when that
total is a perfect square.

## Invariant

A candidate `x` is valid if and only if `x^2` equals the full arithmetic-series
sum of `1..n`.

## Complexity

- Time: O(1)
- Space: O(1)

## Review Prompt

How does including the pivot in both side sums lead to the equation
`x^2 = n(n + 1) / 2`?
