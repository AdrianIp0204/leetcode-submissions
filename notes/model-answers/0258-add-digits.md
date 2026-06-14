# Add Digits

- Pattern: digital root
- Original attempt: [submissions/0258-add-digits](../../submissions/0258-add-digits/)

## Model Solution

```python
class Solution:
    def addDigits(self, num: int) -> int:
        if num == 0:
            return 0
        return 1 + (num - 1) % 9
```

## Why This Is The Model

Repeated digit sums preserve the value modulo 9. The shifted formula keeps nonzero
multiples of 9 at `9` instead of collapsing them to `0`.

## Invariant

Each digit-sum step has the same remainder modulo 9 as the original number.

## Complexity

- Time: O(1)
- Space: O(1)

## Review Prompt

Why do `9`, `18`, and `99` return `9` instead of `0`?
