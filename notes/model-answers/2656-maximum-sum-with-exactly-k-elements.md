# Maximum Sum With Exactly K Elements

- Pattern: greedy arithmetic progression
- Original attempt: [submissions/2656-maximum-sum-with-exactly-k-elements](../../submissions/2656-maximum-sum-with-exactly-k-elements/)

## Model Solution

```python
class Solution:
    def maximizeSum(self, nums: List[int], k: int) -> int:
        largest = max(nums)
        return k * (2 * largest + k - 1) // 2
```

## Why This Is The Model

The best choice is always the current maximum value. Repeating that operation
chooses `largest`, then `largest + 1`, continuing through `largest + k - 1`, so
the answer is the sum of that arithmetic progression.

## Invariant

Before each of the `k` choices, the number selected by the greedy strategy is
one greater than the value selected on the previous step.

## Complexity

- Time: O(n), to find the maximum
- Space: O(1)

## Review Prompt

Why does the final chosen value end at `largest + k - 1` rather than
`largest + k`?
