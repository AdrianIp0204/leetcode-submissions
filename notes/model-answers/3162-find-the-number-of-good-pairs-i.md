# Find The Number Of Good Pairs I

- Pattern: pair enumeration
- Original attempt: [submissions/3162-find-the-number-of-good-pairs-i](../../submissions/3162-find-the-number-of-good-pairs-i/)

## Model Solution

```python
class Solution:
    def numberOfPairs(self, nums1: List[int], nums2: List[int], k: int) -> int:
        ans = 0

        for a in nums1:
            for b in nums2:
                if a % (b * k) == 0:
                    ans += 1

        return ans
```

## Why This Is The Model

For the first version of the problem, direct pair enumeration is simple and
matches the submitted solution.

## Invariant

After scanning a prefix of pairs, `ans` is the number of scanned pairs whose
divisibility condition holds.

## Complexity

- Time: O(len(nums1) * len(nums2))
- Space: O(1)

## Review Prompt

Why does `k` multiply the `nums2` value before the divisibility check?
