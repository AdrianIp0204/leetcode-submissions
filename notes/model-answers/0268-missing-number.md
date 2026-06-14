# Missing Number

- Pattern: expected sum
- Original attempt: [submissions/0268-missing-number](../../submissions/0268-missing-number/)

## Model Solution

```python
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        n = len(nums)
        expected = n * (n + 1) // 2
        return expected - sum(nums)
```

## Why This Is The Model

The array contains each number from `0` through `n` except one. The full arithmetic
series sum minus the observed sum leaves exactly the missing value.

## Invariant

`expected - sum(nums)` equals the total contribution of values that should exist
but do not appear in the array.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

How does this avoid the hidden nested scan caused by `i in nums` inside a loop?
