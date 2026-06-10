# Intersection of Two Arrays

- Pattern: set intersection
- Original attempt: [submissions/0349-intersection-of-two-arrays](../../submissions/0349-intersection-of-two-arrays/)

## Model Solution

```python
class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        return list(set(nums1) & set(nums2))
```

## Why This Is The Model

The output should contain each shared value once, so sets match the problem directly:
they deduplicate values and make intersection a single operation.

## Invariant

The result set contains exactly the values that appear in both input sets.

## Complexity

- Time: O(n + m)
- Space: O(n + m)

## Review Prompt

How would the approach change if the problem asked for duplicate counts too?
