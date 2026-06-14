# Find All Numbers Disappeared in an Array

- Pattern: in-place index marking
- Original attempt: [submissions/0448-find-all-numbers-disappeared-in-an-array](../../submissions/0448-find-all-numbers-disappeared-in-an-array/)

## Model Solution

```python
class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        for num in nums:
            index = abs(num) - 1
            nums[index] = -abs(nums[index])

        missing = []
        for index, num in enumerate(nums):
            if num > 0:
                missing.append(index + 1)

        return missing
```

## Why This Is The Model

Every value in the array belongs to the range `1..n`, so it can point to its own
index. Marking that index negative records that the value appeared, and positive
entries after the scan reveal the values that never appeared.

## Invariant

After marking a value `x`, `nums[x - 1]` is negative, meaning `x` has been seen
at least once.

## Complexity

- Time: O(n)
- Space: O(1) extra, not counting the output

## Review Prompt

Why does the marking step use `abs(num)` instead of `num` directly?
