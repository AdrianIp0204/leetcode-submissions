# Monotonic Array

- Pattern: single-pass direction tracking
- Original attempt: [submissions/0896-monotonic-array](../../submissions/0896-monotonic-array/)

## Model Solution

```python
class Solution:
    def isMonotonic(self, nums: List[int]) -> bool:
        l = len(nums)
        if l < 3:
            return True
        greater = None
        prev = nums.pop()
        curr = 0
        while nums:
            if prev == nums[-1]:
                pass
            elif prev > nums[-1]:
                if greater is False:
                    return False
                elif greater is None:
                    greater = True
            else:
                if greater is True:
                    return False
                elif greater is None:
                    greater = False
            prev = nums.pop()
        return True
```

## Why This Is The Model

The accepted solution stores the first non-equal direction and rejects any later contradiction. The mutation is not necessary, but the comparison logic is the model idea.

## Invariant or Proof Idea

Once `greater` is set, every processed non-equal adjacent pair has matched that same direction.

## Complexity

- Time: O(n)
- Space: O(1), though the accepted code mutates the input with `pop()`

## Review Prompt

Why should equal adjacent values not set the monotonic direction?
