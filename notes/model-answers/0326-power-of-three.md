# Power of Three

- Pattern: math divisibility
- Original attempt: [submissions/0326-power-of-three](../../submissions/0326-power-of-three/)

## Model Solution

```python
class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        return n > 0 and 1162261467 % n == 0
```

## Why This Is The Model

For 32-bit signed inputs, `1162261467` is the largest power of three. Every
positive power of three divides it exactly, while non-powers do not.

## Invariant

The divisibility check is only meaningful after rejecting non-positive numbers.

## Complexity

- Time: O(1)
- Space: O(1)

## Review Prompt

Why does this constant-based trick depend on the input bound?
