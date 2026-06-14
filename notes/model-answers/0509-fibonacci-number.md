# Fibonacci Number

- Pattern: memoized recurrence
- Original attempt: [submissions/0509-fibonacci-number](../../submissions/0509-fibonacci-number/)

## Model Solution

```python
from functools import cache
class Solution:
    def fib(self, n: int) -> int:
        @cache
        def f(k):
            if k<2:
                return k
            return f(k-1) + f(k-2)
        return f(n)
```

## Why This Is The Model

The accepted solution states the recurrence directly and protects it with `@cache`, which is the important DP lesson.

## Invariant or Proof Idea

Once `f(k)` returns, it is cached as the correct Fibonacci value for that `k` and never recomputed.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why is uncached recursion much slower for Fibonacci?
