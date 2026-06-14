# Smallest Integer Divisible by K

- Pattern: modular arithmetic / remainder simulation
- Original attempt: [submissions/1015-smallest-integer-divisible-by-k](../../submissions/1015-smallest-integer-divisible-by-k/)

## Model Solution

```python
class Solution:
    def smallestRepunitDivByK(self, k: int) -> int:
        if k % 2 == 0 or k % 5 == 0:
            return -1

        remainder = 0
        for length in range(1, k + 1):
            remainder = (remainder * 10 + 1) % k
            if remainder == 0:
                return length

        return -1
```

## Why This Is The Model

The number `111...1` grows too large to build directly. The only information
needed for divisibility by `k` is its remainder, and appending a `1` updates that
remainder with `(old * 10 + 1) % k`.

The early return handles the impossible cases: a number made only of ones is
never divisible by 2 or 5.

## Invariant

After `length` iterations, `remainder` equals the remainder of the repunit with
`length` ones modulo `k`.

## Complexity

- Time: O(k)
- Space: O(1)

## Review Prompt

Why do repeated remainders imply that continuing forever would only cycle?
