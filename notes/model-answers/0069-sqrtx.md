# Sqrt(x)

- Pattern: binary search on answer
- Original attempt: [submissions/0069-sqrtx](../../submissions/0069-sqrtx/)

## Model Solution

```python
class Solution:
    def mySqrt(self, x: int) -> int:
        left, right = 0, x
        answer = 0

        while left <= right:
            mid = (left + right) // 2
            square = mid * mid

            if square <= x:
                answer = mid
                left = mid + 1
            else:
                right = mid - 1

        return answer
```

## Why This Is The Model

The answer is the largest integer whose square is not greater than `x`. That is
a boundary in a sorted yes/no range, so binary search is the intended pattern.

## Invariant

`answer` is the best valid square root found so far. If `mid * mid <= x`, values
up to `mid` are valid; otherwise `mid` and everything larger is too big.

## Complexity

- Time: O(log x)
- Space: O(1)

## Review Prompt

Why do we keep searching to the right after finding a valid `mid`?
