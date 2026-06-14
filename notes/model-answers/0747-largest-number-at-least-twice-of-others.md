# Largest Number At Least Twice of Others

- Pattern: one-pass largest and second largest
- Original attempt: [submissions/0747-largest-number-at-least-twice-of-others](../../submissions/0747-largest-number-at-least-twice-of-others/)

## Model Solution

```python
class Solution:
    def dominantIndex(self, nums: List[int]) -> int:
        largest = -1
        second = -1
        largest_index = -1

        for index, value in enumerate(nums):
            if value > largest:
                second = largest
                largest = value
                largest_index = index
            elif value > second:
                second = value

        return largest_index if largest >= 2 * second else -1
```

## Why This Is The Model

Only the second largest value can violate the "at least twice every other"
condition. Tracking the top two values by position avoids sorting and avoids the
duplicate-maximum trap caused by comparing values instead of indices.

## Invariant

After each element is processed, `largest` and `second` are the largest and
second largest values seen so far, and `largest_index` points to `largest`.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why is it enough to compare the maximum only against the second largest value?
