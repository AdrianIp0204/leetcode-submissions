# Find Common Elements Between Two Arrays

- Pattern: membership counting
- Original attempt: [submissions/2956-find-common-elements-between-two-arrays](../../submissions/2956-find-common-elements-between-two-arrays/)

## Model Solution

```python
class Solution:
    def findIntersectionValues(self, nums1: List[int], nums2: List[int]) -> List[int]:
        ans1 = ans2 = 0
        for n in nums1:
            if n in nums2:
                ans1 += 1
        for n in nums2:
            if n in nums1:
                ans2 += 1
        return [ans1, ans2]
```

## Why This Is The Model

The accepted solution performs the two requested directional membership counts separately and returns both counts.

## Invariant or Proof Idea

Each loop increments exactly once per element that appears in the opposite array, preserving duplicates in the array being scanned.

## Complexity

- Time: O(n * m)
- Space: O(1)

## Review Prompt

When would converting each array to a set improve this code?
