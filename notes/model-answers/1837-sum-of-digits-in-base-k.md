# Sum of Digits in Base K

- Pattern: repeated division digit extraction
- Original attempt: [submissions/1837-sum-of-digits-in-base-k](../../submissions/1837-sum-of-digits-in-base-k/)

## Model Solution

```python
class Solution:
    def sumBase(self, n: int, k: int) -> int:
        total = 0

        while n:
            total += n % k
            n //= k

        return total
```

## Why This Is The Model

`n % k` gives the current least-significant digit in base `k`, and `n //= k`
removes that digit. Adding each extracted digit gives the requested base-k digit
sum without building the converted string.

## Invariant

Before each loop iteration, `total` is the sum of all base-k digits already
removed from the original number, and `n` is the unprocessed prefix.

## Complexity

- Time: O(log_k n)
- Space: O(1)

## Review Prompt

Why must the remainder be added before dividing `n` by `k`?
