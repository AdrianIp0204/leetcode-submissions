# Count Number of Pairs With Absolute Difference K

- Pattern: brute-force pair enumeration
- Original attempt: [submissions/2006-count-number-of-pairs-with-absolute-difference-k](../../submissions/2006-count-number-of-pairs-with-absolute-difference-k/)

## Model Solution

```python
class Solution:
    def countKDifference(self, nums: List[int], k: int) -> int:
        res = 0
        n = len(nums)
        
        for i in range(n):
            for j in range(i + 1, n):
                if abs(nums[i] - nums[j]) == k:
                    res += 1
                    
        return res
```

## Why This Is The Model

The accepted solution is simple and matches the pair definition exactly. A frequency-map version is possible, but the brute force is clear for this easy problem.

## Invariant or Proof Idea

After finishing outer index `i`, all valid pairs whose first index is at most `i` have been counted exactly once.

## Complexity

- Time: O(n^2)
- Space: O(1)

## Review Prompt

Why does the inner loop start at `i + 1`?
