# Minimum Common Value

- Pattern: two pointers on sorted arrays
- Original attempt: [submissions/2540-minimum-common-value](../../submissions/2540-minimum-common-value/)

## Model Solution

```python
class Solution:
    def getCommon(self, nums1: List[int], nums2: List[int]) -> int:
        i, j = 0, 0
        while i < len(nums1) and j < len(nums2):
            if nums1[i] == nums2[j]:
                return nums1[i]
            if nums1[i] < nums2[j]:
                i += 1
            else:
                j += 1
        return -1
```

## Why This Is The Model

The accepted solution finds the first intersection in increasing order, so the first equality is automatically the minimum common value.

## Invariant or Proof Idea

Before each comparison, every skipped value is smaller than the other current value and therefore cannot match later.

## Complexity

- Time: O(n + m)
- Space: O(1)

## Review Prompt

Why can the first equal pair be returned immediately?
