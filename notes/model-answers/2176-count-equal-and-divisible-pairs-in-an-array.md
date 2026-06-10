# Count Equal and Divisible Pairs in an Array

- Pattern: bounded pair enumeration
- Original attempt: [submissions/2176-count-equal-and-divisible-pairs-in-an-array](../../submissions/2176-count-equal-and-divisible-pairs-in-an-array/)

## Model Solution

```python
class Solution:
    def countPairs(self, nums: List[int], k: int) -> int:
        pairs = 0

        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] == nums[j] and (i * j) % k == 0:
                    pairs += 1

        return pairs
```

## Why This Is The Model

The constraints are small enough that checking every index pair is direct and
hard to get wrong. The nested loops enforce `i < j`, then the condition mirrors
the statement exactly: equal values and an index product divisible by `k`.

## Invariant

Before each outer-loop step, every valid pair whose first index is smaller than
the current `i` has already been considered exactly once.

## Complexity

- Time: O(n^2)
- Space: O(1)

## Review Prompt

Why does starting `j` at `i + 1` avoid both duplicate pairs and self-pairs?
