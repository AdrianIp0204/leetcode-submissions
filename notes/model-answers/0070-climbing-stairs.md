# Climbing Stairs

- Pattern: dynamic programming / Fibonacci recurrence
- Original attempt: [submissions/0070-climbing-stairs](../../submissions/0070-climbing-stairs/)

## Model Solution

```python
from functools import cache
class Solution:
    def climbStairs(self, n: int) -> int:
        @cache
        def climb(k):
            if k == 1:
                return 1
            elif k == 2:
                return 2
            return climb(k-1) + climb(k-2)
        return climb(n)
```

## Why This Is The Model

The cached recursion states the recurrence directly and evaluates each step count once, which is the important model even if an iterative two-variable version can reduce space.

## Invariant or Proof Idea

After `climb(k)` has been cached, it equals the exact number of valid move sequences ending at step `k`.

## Complexity

- Time: O(n)
- Space: O(n) for the cache and recursion stack

## Review Prompt

What are the two previous states that can lead directly into step `k`?
