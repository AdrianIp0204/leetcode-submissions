# Minimum Operations to Make Array Sum Divisible by K

- Pattern: modulo remainder
- Original attempt: [submissions/3512-minimum-operations-to-make-array-sum-divisible-by-k](../../submissions/3512-minimum-operations-to-make-array-sum-divisible-by-k/)

## Model Solution

```python
class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        return sum(nums) % k
```

## Why This Is The Model

Each operation decreases the array sum by one. If the current sum leaves
remainder `r` modulo `k`, exactly `r` decrements move it down to the nearest
multiple of `k`, and fewer decrements cannot remove the remainder.

## Invariant

The sum modulo `k` is the amount by which the total exceeds the previous
divisible value.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why is there no need to decide which element receives each decrement?
