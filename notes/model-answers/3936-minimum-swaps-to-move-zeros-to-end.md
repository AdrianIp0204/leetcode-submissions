# Minimum Swaps to Move Zeros to End

- Pattern: count target suffix
- Original attempt: [submissions/3936-minimum-swaps-to-move-zeros-to-end](../../submissions/3936-minimum-swaps-to-move-zeros-to-end/)

## Model Solution

```python
class Solution:
    def minimumSwaps(self, nums: list[int]) -> int:
        zero_count = nums.count(0)
        zeros_already_at_end = 0
        for i in range(len(nums) - 1, len(nums) - 1 - zero_count, -1):
            if nums[i] == 0:
                zeros_already_at_end += 1
        return zero_count - zeros_already_at_end
```

## Why This Is The Model

The later accepted solution counts how many zero slots are needed at the end, then subtracts the zeros already in that suffix.

## Invariant or Proof Idea

The final `zero_count` positions must all be zeros; every nonzero currently in that suffix must be swapped with a zero outside it.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why is the answer the number of missing zeros in the final suffix?
