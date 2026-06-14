# Count Pairs Whose Sum is Less than Target

- Pattern: sorting + two pointers
- Original attempt: [submissions/2824-count-pairs-whose-sum-is-less-than-target](../../submissions/2824-count-pairs-whose-sum-is-less-than-target/)

## Model Solution

```python
class Solution:
    def countPairs(self, nums: List[int], target: int) -> int:
        nums.sort()
        left, right = 0, len(nums) - 1
        ans = 0
        while left < right:
            if nums[left] + nums[right] < target:
                ans += right - left
                left += 1
            else:
                right -= 1
        return ans
```

## Why This Is The Model

The accepted solution uses sorted order to count many valid pairs at once when the smallest current value works with the largest current value.

## Invariant or Proof Idea

If `nums[left] + nums[right] < target`, then `nums[left]` also works with every index between `left + 1` and `right`.

## Complexity

- Time: O(n log n)
- Space: O(1) extra, ignoring sort internals

## Review Prompt

Why is it correct to move `right` leftward when the current sum is too large?
