# Divide Two Integers

- Pattern: binary long division / bit shifting
- Original attempt: [submissions/0029-divide-two-integers](../../submissions/0029-divide-two-integers/)

## Model Solution

```python
class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        INT_MIN = -(2**31)
        INT_MAX = 2**31 - 1

        if dividend == INT_MIN and divisor == -1:
            return INT_MAX

        negative = (dividend < 0) ^ (divisor < 0)
        dividend = abs(dividend)
        divisor = abs(divisor)
        quotient = 0

        for shift in range(31, -1, -1):
            if (divisor << shift) <= dividend:
                dividend -= divisor << shift
                quotient += 1 << shift

        return -quotient if negative else quotient
```

## Why This Is The Model

Division can be built by subtracting powers of two copies of the divisor. The
accepted attempt finds the biggest shift that fits, subtracts it, and then
rescans from zero. The model version scans bit positions from large to small once,
which is the usual binary long-division shape.

## Invariant

After each accepted shift, `quotient * divisor + dividend` still equals the
original absolute dividend. The remaining dividend is always smaller than the
part that has not yet been represented in the quotient.

## Complexity

- Time: O(1) for 32-bit integers; O(log n) in the general bit-length view
- Space: O(1)

## Review Prompt

Why does checking larger shifts first prevent repeated subtraction one divisor at
a time?
