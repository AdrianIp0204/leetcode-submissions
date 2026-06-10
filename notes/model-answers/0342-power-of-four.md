# Power of Four

- Pattern: integer power test
- Original attempt: [submissions/0342-power-of-four](../../submissions/0342-power-of-four/)

## Model Solution

```python
class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        return n > 0 and (n & (n - 1)) == 0 and n % 3 == 1
```

## Why This Is The Model

The bit test confirms that `n` is a power of two. Among positive powers of two,
only powers of four have remainder `1` modulo `3`, which avoids floating-point
logarithm precision issues.

## Invariant

A valid candidate has exactly one set bit, and that bit is in an even-numbered
power-of-two position.

## Complexity

- Time: O(1)
- Space: O(1)

## Review Prompt

Why does checking only `n & (n - 1) == 0` still accept some powers of two that are
not powers of four?
