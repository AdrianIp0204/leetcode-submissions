# Find the Difference of Two Arrays

- Pattern: set difference
- Original attempt: [submissions/2215-find-the-difference-of-two-arrays](../../submissions/2215-find-the-difference-of-two-arrays/)

## Model Solution

```python
class Solution:
    def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
        s1, s2 = set(nums1), set(nums2)
        return [list(s1-s2),list(s2-s1)]
```

## Why This Is The Model

The accepted solution uses set algebra that mirrors the two requested answer lists.

## Invariant or Proof Idea

Every value in `s1 - s2` appears in the first array and not the second, and vice versa for `s2 - s1`.

## Complexity

- Time: O(n + m)
- Space: O(n + m)

## Review Prompt

Why is it safe to discard duplicate values at the start?
