# Build an Array With Stack Operations

- Pattern: stream simulation / skipped values
- Original attempt: [submissions/1441-build-an-array-with-stack-operations](../../submissions/1441-build-an-array-with-stack-operations/)

## Model Solution

```python
class Solution:
    def buildArray(self, target: List[int], n: int) -> List[str]:
        operations = []
        current = 1

        for wanted in target:
            while current < wanted:
                operations.append("Push")
                operations.append("Pop")
                current += 1

            operations.append("Push")
            current += 1

        return operations
```

## Why This Is The Model

The stream is consumed in increasing order, just like `target`. Values before the
next target value must be read and discarded with `Push` then `Pop`, while target
values are kept with a single `Push`.

## Invariant

Before each target value is handled, every stream value below `current` has
already been simulated correctly.

## Complexity

- Time: O(m), where `m` is the largest consumed stream value
- Space: O(m) for the operation list

## Review Prompt

Why does the solution never need to inspect values greater than the last target?
