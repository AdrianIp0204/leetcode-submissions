# Final Value of Variable After Performing Operations

- Pattern: operation effect simulation
- Original attempt: [submissions/2011-final-value-of-variable-after-performing-operations](../../submissions/2011-final-value-of-variable-after-performing-operations/)

## Model Solution

```python
class Solution:
    def finalValueAfterOperations(self, operations: List[str]) -> int:
        value = 0

        for operation in operations:
            if "+" in operation:
                value += 1
            else:
                value -= 1

        return value
```

## Why This Is The Model

Only the operation's effect matters: the two increment forms both contain `+`,
and the two decrement forms both contain `-`. Scanning once and applying that
effect produces the final value.

## Invariant

After each operation is processed, `value` equals the result of applying exactly
the operations seen so far to the initial value zero.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why is it safe here to classify by the presence of `+` instead of comparing all
four possible strings?
