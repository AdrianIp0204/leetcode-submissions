# Max Consecutive Ones

- Pattern: run-length counting
- Original attempt: [submissions/0485-max-consecutive-ones](../../submissions/0485-max-consecutive-ones/)

## Model Solution

```python
class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        best = 0
        current = 0

        for num in nums:
            if num == 1:
                current += 1
                best = max(best, current)
            else:
                current = 0

        return best
```

## Why This Is The Model

A forward scan keeps the length of the current run of ones and the best run seen
so far. Resetting on zero is enough because any run crossing a zero is invalid.

## Invariant

After each element, `current` is the number of consecutive ones ending at that
element, and `best` is the maximum run length seen anywhere so far.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why must `current` reset to zero when the scan reaches a `0`?
