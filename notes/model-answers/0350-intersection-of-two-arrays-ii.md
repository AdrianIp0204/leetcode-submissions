# Intersection of Two Arrays II

- Pattern: counting multiplicities
- Original attempt: [submissions/0350-intersection-of-two-arrays-ii](../../submissions/0350-intersection-of-two-arrays-ii/)

## Model Solution

```python
class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        res = []
        cn1, cn2 = Counter(nums1), Counter(nums2)
        for k, v in cn1.items():
            if k in cn2:
                res.extend([k] * min(v, cn2[k]))
        return res
```

## Why This Is The Model

The accepted solution directly models the arrays as Counters and uses `min(count1, count2)` for each shared value.

## Invariant or Proof Idea

For every processed key, the result contains exactly the number of copies that can be paired between the two arrays.

## Complexity

- Time: O(n + m + u)
- Space: O(u + v)

## Review Prompt

Why would converting both arrays to sets lose information?
