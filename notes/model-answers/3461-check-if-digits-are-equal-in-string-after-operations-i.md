# Check If Digits Are Equal in String After Operations I

- Pattern: digit simulation
- Original attempt: [submissions/3461-check-if-digits-are-equal-in-string-after-operations-i](../../submissions/3461-check-if-digits-are-equal-in-string-after-operations-i/)

## Model Solution

```python
class Solution:
    def hasSameDigits(self, s: str) -> bool:
        digits = [int(ch) for ch in s]

        while len(digits) > 2:
            digits = [
                (digits[i] + digits[i + 1]) % 10
                for i in range(len(digits) - 1)
            ]

        return digits[0] == digits[1]
```

## Why This Is The Model

The submitted solution performs the required adjacent-pair reduction. The model
keeps the same simulation but uses one loop condition on the current digit list,
which avoids a separate first reduction.

## Invariant

At the start of each loop, `digits` is exactly the current row after applying
all previous adjacent-pair reductions.

## Complexity

- Time: O(n^2)
- Space: O(n)

## Review Prompt

Why does each reduction make the list exactly one digit shorter?

