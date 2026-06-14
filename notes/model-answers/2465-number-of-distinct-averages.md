# Number of Distinct Averages

- Pattern: sorting + two pointers
- Original attempt: [submissions/2465-number-of-distinct-averages](../../submissions/2465-number-of-distinct-averages/)

## Model Solution

```python
class Solution:
    def distinctAverages(self, nums: List[int]) -> int:
        nums.sort()
        left, right = 0, len(nums) - 1
        seen = set()
        while left < right:
            seen.add((nums[left] + nums[right]) / 2)
            left += 1
            right -= 1
        return len(seen)
```

## Why This Is The Model

The accepted solution sorts the values, pairs the current smallest and largest values, and records each produced average.

## Invariant or Proof Idea

After each loop, one smallest remaining value and one largest remaining value have been consumed, matching the required removal process.

## Complexity

- Time: O(n log n)
- Space: O(n)

## Review Prompt

Why would storing sums instead of averages still distinguish the same pairs?
