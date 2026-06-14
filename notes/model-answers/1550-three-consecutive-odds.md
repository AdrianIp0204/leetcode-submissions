# Three Consecutive Odds

- Pattern: fixed-size sliding window
- Original attempt: [submissions/1550-three-consecutive-odds](../../submissions/1550-three-consecutive-odds/)

## Model Solution

```python
class Solution:
    def threeConsecutiveOdds(self, arr: List[int]) -> bool:
        streak = 0

        for num in arr:
            if num % 2 == 1:
                streak += 1
                if streak == 3:
                    return True
            else:
                streak = 0

        return False
```

## Why This Is The Model

The solution tracks the current run of consecutive odd values. An even value
breaks the run, and reaching a streak of three proves the required pattern
exists without needing manual lookahead indexes.

## Invariant

After each number is processed, `streak` is the length of the current suffix of
consecutive odd numbers.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why must the streak reset to `0` when an even number appears?
