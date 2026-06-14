# Container With Most Water

- Pattern: two pointers / limiting height
- Original attempt: [submissions/0011-container-with-most-water](../../submissions/0011-container-with-most-water/)

## Model Solution

```python
class Solution:
    def maxArea(self, height: List[int]) -> int:
        left = 0
        right = len(height) - 1
        best = 0

        while left < right:
            width = right - left
            best = max(best, width * min(height[left], height[right]))

            if height[left] <= height[right]:
                left += 1
            else:
                right -= 1

        return best
```

## Why This Is The Model

The accepted attempt already uses the right core idea. The model version is just
the clean form of the two-pointer proof: start with the widest container, record
its area, then move the pointer at the shorter wall.

Moving the taller wall cannot help while the shorter wall stays fixed, because
the width gets smaller and the limiting height cannot increase.

## Invariant

Whenever a pointer moves inward, every skipped pair with the old shorter wall has
already been proven unable to beat the best area that could use that wall.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why is it safe to discard the shorter wall after checking the current area?
