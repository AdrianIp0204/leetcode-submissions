# Transform Array By Parity

- Pattern: parity partitioning
- Original attempt: [submissions/3467-transform-array-by-parity](../../submissions/3467-transform-array-by-parity/)

## Model Solution

```python
class Solution:
    def transformArray(self, nums: List[int]) -> List[int]:
        zeros = sum(num % 2 == 0 for num in nums)
        ones = len(nums) - zeros
        return [0] * zeros + [1] * ones
```

## Why This Is The Model

Only the parity of each value matters. Counting evens is enough to construct the
sorted transformed array.

## Invariant

Every even input contributes one `0`; every odd input contributes one `1`.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why can the transformed array be built from counts instead of preserving order?
