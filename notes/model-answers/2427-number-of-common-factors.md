# Number of Common Factors

- Pattern: GCD divisor counting
- Original attempt: [submissions/2427-number-of-common-factors](../../submissions/2427-number-of-common-factors/)

## Model Solution

```python
class Solution:
    def commonFactors(self, a: int, b: int) -> int:
        common = gcd(a, b)
        count = 0

        for factor in range(1, isqrt(common) + 1):
            if common % factor == 0:
                count += 1
                if factor != common // factor:
                    count += 1

        return count
```

## Why This Is The Model

Every common factor of `a` and `b` is a divisor of `gcd(a, b)`, so the problem
reduces to counting divisors of one number. Scanning only through the square
root counts factor pairs efficiently, with a separate check to avoid
double-counting a perfect-square root.

## Invariant

After testing each candidate up to `factor`, `count` includes every divisor pair
of `gcd(a, b)` whose smaller member has already been scanned.

## Complexity

- Time: O(sqrt(gcd(a, b)))
- Space: O(1)

## Review Prompt

Why is it enough to count divisors of the GCD instead of checking every number
against both `a` and `b`?
