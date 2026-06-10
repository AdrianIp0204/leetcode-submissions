# A Number After a Double Reversal

- Pattern: trailing-zero observation
- Original attempt: [submissions/2119-a-number-after-a-double-reversal](../../submissions/2119-a-number-after-a-double-reversal/)

## Model Solution

```python
class Solution:
    def isSameAfterReversals(self, num: int) -> bool:
        return num == 0 or num % 10 != 0
```

## Why This Is The Model

Reversing a positive number drops any trailing zeros, and the second reversal
cannot restore them. Therefore the only positive numbers that change are those
ending in zero; zero itself remains zero.

## Invariant

The double reversal preserves the number exactly when the first reversal does
not discard any trailing zero information.

## Complexity

- Time: O(1)
- Space: O(1)

## Review Prompt

Why is `0` the exception to the rule that numbers ending in zero fail?
