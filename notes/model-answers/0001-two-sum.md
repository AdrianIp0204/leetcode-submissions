# Two Sum

- Pattern: hash map / complement lookup
- Original attempt: [submissions/0001-two-sum](../../submissions/0001-two-sum/)

## Model Solution

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}

        for i, num in enumerate(nums):
            need = target - num
            if need in seen:
                return [seen[need], i]
            seen[num] = i
```

## Why This Is The Model

The brute-force version asks every pair whether it works. The model answer turns
the question around: when you see `num`, the only partner that matters is
`target - num`, so store earlier values in a dictionary and check that partner
in O(1) average time.

## Invariant

Before index `i`, `seen` contains values from indices `< i`. If the complement is
already in `seen`, the returned pair uses two different indices and is complete.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why must `seen[num] = i` happen after checking the complement?
