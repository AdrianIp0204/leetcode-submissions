# Maximum Element After Decreasing and Rearranging

## Pattern

Greedy counting with capped frequencies.

## Model Solution

```python
class Solution:
    def maximumElementAfterDecrementingAndRearranging(self, arr: List[int]) -> int:
        n = len(arr)
        freq = [0] * (n + 1)

        for value in arr:
            freq[min(value, n)] += 1

        best = 1
        for value in range(2, n + 1):
            best = min(best + freq[value], value)

        return best
```

## Why This Is The Model

The final array only cares about how many numbers can support each value from `1`
through `n`. Any original value larger than `n` has the same usefulness as `n`,
because an array of length `n` cannot have a valid maximum above `n`. Counting
capped values avoids sorting while keeping the same greedy order.

## Invariant or Proof Idea

After processing capped values up to `value`, `best` is the largest final maximum
that can be built using only those processed numbers. The next bucket can extend
the maximum by at most its count, but the result also cannot exceed `value`, so
`min(best + freq[value], value)` preserves both constraints.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why is it safe to collapse every number greater than `n` into the `n` bucket?
