# Remove Duplicates from Sorted Array

- Pattern: two pointers / write pointer
- Original attempt: [submissions/0026-remove-duplicates-from-sorted-array](../../submissions/0026-remove-duplicates-from-sorted-array/)

## Model Solution

```python
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if not nums:
            return 0

        write = 1
        for read in range(1, len(nums)):
            if nums[read] != nums[read - 1]:
                nums[write] = nums[read]
                write += 1

        return write
```

## Why This Is The Model

The array is already sorted, so duplicates are adjacent. A set throws away the
sorted-array structure and allocates extra memory. The model answer scans once
and compacts each new value into the next write position.

## Invariant

At every step, `nums[:write]` contains the unique values seen so far, in sorted
order.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why is comparing with `nums[read - 1]` enough in a sorted array?
