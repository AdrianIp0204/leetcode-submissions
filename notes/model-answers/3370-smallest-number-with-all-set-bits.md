# Smallest Number With All Set Bits

- Pattern: next all-ones mask
- Original attempt: [submissions/3370-smallest-number-with-all-set-bits](../../submissions/3370-smallest-number-with-all-set-bits/)

## Model Solution

```python
class Solution:
    def smallestNumber(self, n: int) -> int:
        bits = n.bit_length()
        return (1 << bits) - 1
```

## Why This Is The Model

A positive integer whose binary representation has all set bits is exactly
`2^k - 1`. The smallest such number greater than or equal to `n` uses the same
number of bits as `n`, then fills all of those bits with ones.

## Invariant

`bits` is the minimum width that can represent `n`, and `(1 << bits) - 1` is the
largest value using exactly that width with every bit set.

## Complexity

- Time: O(1)
- Space: O(1)

## Review Prompt

Why does using `n.bit_length()` avoid floating-point edge cases from logarithms?
