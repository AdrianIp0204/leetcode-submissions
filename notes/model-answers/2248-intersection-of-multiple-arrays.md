# Intersection of Multiple Arrays

- Pattern: iterative set intersection
- Original attempt: [submissions/2248-intersection-of-multiple-arrays](../../submissions/2248-intersection-of-multiple-arrays/)

## Model Solution

```python
class Solution:
    def intersection(self, nums: List[List[int]]) -> List[int]:
        net = set(nums[0])
        for i in range(1, len(nums)):
            net &= set(nums[i])
        return list(sorted(net))
```

## Why This Is The Model

The accepted solution keeps exactly the values still possible after each array is processed.

## Invariant or Proof Idea

After processing array `i`, `net` contains exactly the numbers present in every array from `0` through `i`.

## Complexity

- Time: O(total elements + u log u)
- Space: O(u)

## Review Prompt

Why does the candidate set only shrink as more arrays are processed?
