# Two Sum II - Input Array Is Sorted

- Pattern: two pointers on sorted array
- Original attempt: [submissions/0167-two-sum-ii-input-array-is-sorted](../../submissions/0167-two-sum-ii-input-array-is-sorted/)

## Model Solution

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        left = 0
        right = len(nums) - 1
        while right > left:
            total = nums[left] + nums[right]
            if total < target:
                left += 1
            elif total > target:
                right -= 1
            else:
                return [left+1, right+1]
```

## Why This Is The Model

The accepted solution uses the sorted invariant directly and never revisits a pair once the sum comparison has ruled it out.

## Invariant or Proof Idea

At each step, every discarded index pair is impossible: left-side discards were too small with the current maximum, and right-side discards were too large with the current minimum.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why is it safe to move only `left` when the current sum is below target?
