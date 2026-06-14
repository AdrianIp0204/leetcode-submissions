# Compute Alternating Sum

- Pattern: parity-index accumulation
- Original attempt: [submissions/3701-compute-alternating-sum](../../submissions/3701-compute-alternating-sum/)

## Model Solution

```python
class Solution:
    def alternatingSum(self, nums: List[int]) -> int:
        res=0
        for i in range(len(nums)):
            if i%2:
                res -= nums[i]
            else:
                res += nums[i]
        return res
```

## Why This Is The Model

The accepted solution uses a single running total and applies the sign rule directly.

## Invariant or Proof Idea

After index `i`, `res` equals the alternating sum of `nums[0:i+1]`.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why does the first element use a positive sign?
