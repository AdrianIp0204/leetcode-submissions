# Maximum 69 Number

- Pattern: greedy leftmost replacement
- Original attempt: [submissions/1323-maximum-69-number](../../submissions/1323-maximum-69-number/)

## Model Solution

```python
class Solution:
    def maximum69Number(self, num: int) -> int:
        digits = list(str(num))

        for i, digit in enumerate(digits):
            if digit == "6":
                digits[i] = "9"
                break

        return int("".join(digits))
```

## Why This Is The Model

Changing a more significant digit has a larger effect than changing any later
digit. Therefore the best single improvement is the first `6` from the left; if
none exists, the original number is already maximum.

## Invariant

Before the first `6` is changed, all earlier digits are already `9` and cannot
be improved.

## Complexity

- Time: O(d), where `d` is the number of digits
- Space: O(d)

## Review Prompt

Why does changing the leftmost `6` always beat changing a later `6`?
