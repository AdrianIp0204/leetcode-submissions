# Largest Positive Integer That Exists With Its Negative

- Pattern: sorting + membership check
- Original attempt: [submissions/2441-largest-positive-integer-that-exists-with-its-negative](../../submissions/2441-largest-positive-integer-that-exists-with-its-negative/)

## Model Solution

```python
class Solution:
    def findMaxK(self, nums: List[int]) -> int:
        nums.sort(reverse=True)
        for n in nums:
            if n > 0 and -n in nums:
                return n
        return -1
```

## Why This Is The Model

The accepted solution scans positive values from largest to smallest and returns the first one whose negative is present.

## Invariant or Proof Idea

Because the scan is descending, the first valid positive number is the maximum valid answer.

## Complexity

- Time: O(n log n + n^2) with list membership checks
- Space: O(1) extra, ignoring sort internals

## Review Prompt

How would a set change the membership check cost?
