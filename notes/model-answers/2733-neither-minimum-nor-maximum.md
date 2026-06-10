# Neither Minimum nor Maximum

- Pattern: non-extreme witness
- Original attempt: [submissions/2733-neither-minimum-nor-maximum](../../submissions/2733-neither-minimum-nor-maximum/)

## Model Solution

```python
class Solution:
    def findNonMinOrMax(self, nums: List[int]) -> int:
        if len(nums) < 3:
            return -1

        smallest = min(nums)
        largest = max(nums)

        for num in nums:
            if num != smallest and num != largest:
                return num
```

## Why This Is The Model

Any non-extreme value is valid, so the array does not need to be sorted. Finding
the minimum and maximum first, then returning the first value different from both,
keeps the logic linear and states the condition directly.

## Invariant

During the final scan, a returned value is guaranteed to be different from both
global extremes.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why is sorting unnecessary when the problem accepts any value that is neither
minimum nor maximum?
