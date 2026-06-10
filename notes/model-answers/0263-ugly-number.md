# Ugly Number

- Pattern: repeated factor removal
- Original attempt: [submissions/0263-ugly-number](../../submissions/0263-ugly-number/)

## Model Solution

```python
class Solution:
    def isUgly(self, n: int) -> bool:
        if n <= 0:
            return False

        for factor in (2, 3, 5):
            while n % factor == 0:
                n //= factor

        return n == 1
```

## Why This Is The Model

An ugly number has only `2`, `3`, and `5` as prime factors. Dividing out every
allowed factor leaves `1` exactly when no disallowed prime factor remains.

## Invariant

After each factor loop, `n` has no remaining copies of the factors already processed.

## Complexity

- Time: O(log n)
- Space: O(1)

## Review Prompt

Why should this use integer division instead of `/`?
