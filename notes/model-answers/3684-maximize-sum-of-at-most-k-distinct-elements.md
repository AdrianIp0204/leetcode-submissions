# Maximize Sum of At Most K Distinct Elements

- Pattern: distinct values + greedy sort
- Original attempt: [submissions/3684-maximize-sum-of-at-most-k-distinct-elements](../../submissions/3684-maximize-sum-of-at-most-k-distinct-elements/)

## Model Solution

```python
class Solution:
    def maxKDistinct(self, nums: List[int], k: int) -> List[int]:
        return sorted(set(nums), reverse=True)[:k]
```

## Why This Is The Model

The later accepted solution removes duplicates, sorts the remaining values descending, and takes the largest `k` values.

## Invariant or Proof Idea

To maximize the sum with distinct elements, every chosen value should be among the largest available distinct values.

## Complexity

- Time: O(n log n)
- Space: O(n)

## Review Prompt

Why is sorting descending simpler than maintaining a max heap here?
