# Maximum Product of Three Numbers

- Pattern: sign-aware sorting
- Original attempt: [submissions/0628-maximum-product-of-three-numbers](../../submissions/0628-maximum-product-of-three-numbers/)

## Model Solution

```python
class Solution:
    def maximumProduct(self, nums: List[int]) -> int:
        nums.sort()

        three_largest = nums[-1] * nums[-2] * nums[-3]
        two_smallest_and_largest = nums[0] * nums[1] * nums[-1]

        return max(three_largest, two_smallest_and_largest)
```

## Why This Is The Model

After sorting, the best product must use either the three largest values or the
largest value with the two smallest values. The second candidate handles the
case where two negative numbers produce a large positive factor.

## Invariant

The two candidates cover every optimal sign pattern: all high positives, or two
low negatives paired with the highest positive.

## Complexity

- Time: O(n log n)
- Space: O(1) extra beyond the in-place sort

## Review Prompt

Why can the two smallest numbers create the maximum product when both are
negative?
