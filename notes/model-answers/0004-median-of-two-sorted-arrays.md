# Median of Two Sorted Arrays

- Pattern: binary search / sorted partition
- Original attempt: [submissions/0004-median-of-two-sorted-arrays](../../submissions/0004-median-of-two-sorted-arrays/)

## Model Solution

```python
class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        if len(nums1) > len(nums2):
            return self.findMedianSortedArrays(nums2, nums1)

        m, n = len(nums1), len(nums2)
        total_left = (m + n + 1) // 2
        lo, hi = 0, m

        while lo <= hi:
            i = (lo + hi) // 2
            j = total_left - i

            left1 = float("-inf") if i == 0 else nums1[i - 1]
            right1 = float("inf") if i == m else nums1[i]
            left2 = float("-inf") if j == 0 else nums2[j - 1]
            right2 = float("inf") if j == n else nums2[j]

            if left1 <= right2 and left2 <= right1:
                if (m + n) % 2:
                    return max(left1, left2)
                return (max(left1, left2) + min(right1, right2)) / 2

            if left1 > right2:
                hi = i - 1
            else:
                lo = i + 1
```

## Why This Is The Model

The accepted attempt merges by sorting `nums1 + nums2`, which is clear but does
not use the fact that both inputs are already sorted. The model answer searches
for a partition where every element on the left side is less than or equal to
every element on the right side.

Once that partition is valid, the median is determined only by the border values
around the split.

## Invariant

`i` elements are taken from `nums1` and `j` from `nums2`, so the left partition
always has the size needed for the median. Binary search adjusts `i` until the
largest left value is no larger than the smallest right value.

## Complexity

- Time: O(log(min(m, n)))
- Space: O(1)

## Review Prompt

Why is it important to binary search the shorter array?
