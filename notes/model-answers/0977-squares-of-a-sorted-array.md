# Squares of a Sorted Array

- Pattern: two pointers from both ends
- Original attempt: [submissions/0977-squares-of-a-sorted-array](../../submissions/0977-squares-of-a-sorted-array/)

## Model Solution

```python
class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        left, right = 0, len(nums) - 1
        result = [0] * len(nums)

        for write in range(len(nums) - 1, -1, -1):
            if abs(nums[left]) > abs(nums[right]):
                result[write] = nums[left] * nums[left]
                left += 1
            else:
                result[write] = nums[right] * nums[right]
                right -= 1

        return result
```

## Why This Is The Model

The input is sorted by value, not by absolute value. The largest square must
come from one of the two ends, so fill the answer from the back while comparing
magnitudes.

## Invariant

`result[write + 1:]` already contains the largest squares in sorted order. The
next largest square is at either `left` or `right`.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why do we fill from right to left instead of left to right?
