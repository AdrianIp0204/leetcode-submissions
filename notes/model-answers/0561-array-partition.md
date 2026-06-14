# Array Partition

- Pattern: greedy sorting
- Original attempt: [submissions/0561-array-partition](../../submissions/0561-array-partition/)

## Model Solution

```python
class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        nums.sort()
        res = 0
        for i in range(0,len(nums),2):
            res += nums[i]
        return res
```

## Why This Is The Model

The accepted solution is the standard greedy proof in code: after sorting, each pair's smaller element is exactly the value at an even index.

## Invariant or Proof Idea

In sorted order, choosing adjacent pairs preserves as many larger values as possible as pair minima.

## Complexity

- Time: O(n log n)
- Space: O(1) extra, ignoring sort details

## Review Prompt

Why does pairing the smallest value with the largest value hurt the final sum?
