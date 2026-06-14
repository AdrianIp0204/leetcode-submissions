# Can Make Arithmetic Progression From Sequence

- Pattern: sort then adjacent-difference check
- Original attempt: [submissions/1502-can-make-arithmetic-progression-from-sequence](../../submissions/1502-can-make-arithmetic-progression-from-sequence/)

## Model Solution

```python
class Solution:
    def canMakeArithmeticProgression(self, arr: List[int]) -> bool:
        arr.sort()
        difference = arr[1] - arr[0]

        for i in range(2, len(arr)):
            if arr[i] - arr[i - 1] != difference:
                return False

        return True
```

## Why This Is The Model

If the numbers can be rearranged into an arithmetic progression, sorted order is
that progression. Once sorted, every adjacent gap must match the first adjacent
gap, so a single pass verifies the condition.

## Invariant

Before each index `i` is checked, all adjacent pairs ending before `i` have the
same `difference`.

## Complexity

- Time: O(n log n)
- Space: O(1) extra, aside from sort implementation details

## Review Prompt

Why does sorting let a rearrangement question become an adjacent-pair check?
