# Arithmetic Slices

- Pattern: dynamic programming / slices ending here
- Original attempt: [submissions/0413-arithmetic-slices](../../submissions/0413-arithmetic-slices/)

## Model Solution

```python
class Solution:
    def numberOfArithmeticSlices(self, nums: List[int]) -> int:
        total = 0
        ending_here = 0

        for i in range(2, len(nums)):
            if nums[i] - nums[i - 1] == nums[i - 1] - nums[i - 2]:
                ending_here += 1
                total += ending_here
            else:
                ending_here = 0

        return total
```

## Why This Is The Model

When three adjacent numbers keep the same difference, every arithmetic slice
ending at `i - 1` can extend to `i`, and the last three numbers form one new
slice. That is why `ending_here` grows by one and is added to the total.

## Invariant

After processing index `i`, `ending_here` is the number of arithmetic slices that
end exactly at `i`.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

For a run of length 5 with the same difference, why are there 6 arithmetic
slices?
