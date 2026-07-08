# Integer Break

- Pattern: greedy product maximization
- Original attempt: [submissions/0343-integer-break](../../submissions/0343-integer-break/)

## Model Solution

```python
class Solution:
    def integerBreak(self, n: int) -> int:
        if n == 2:
            return 1
        if n == 3:
            return 2

        threes = n // 3
        remainder = n % 3

        if remainder == 1:
            threes -= 1
            remainder = 4
        elif remainder == 0:
            remainder = 1

        return (3**threes) * remainder
```

## Why This Is The Model

For products with a fixed sum, `3`s give the best growth, except that a final
remainder of `1` should be combined with one `3` into `4 = 2 + 2`. The small
cases `2` and `3` need special handling because the integer must be split.

## Invariant

After the remainder adjustment, the split contains only profitable factors:
mostly `3`s, with a final factor of `2`, `4`, or `1`.

## Complexity

- Time: O(1)
- Space: O(1)

## Review Prompt

Why is `3 + 1` worse than `2 + 2` for the final four units?
