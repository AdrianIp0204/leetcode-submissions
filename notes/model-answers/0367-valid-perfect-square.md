# Valid Perfect Square

- Pattern: binary search on answer
- Original attempt: [submissions/0367-valid-perfect-square](../../submissions/0367-valid-perfect-square/)

## Model Solution

```python
class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        left, right = 1, num

        while left <= right:
            mid = left + (right - left) // 2
            square = mid * mid

            if square == num:
                return True
            if square < num:
                left = mid + 1
            else:
                right = mid - 1

        return False
```

## Why This Is The Model

The accepted solution uses the right pattern: search the possible square root
instead of trying every value. The model keeps the same binary search shape and
uses `num` as the upper bound so the invariant is simple even for small inputs.

## Invariant

Every value below `left` has a square smaller than `num`, and every value above
`right` has a square larger than `num`.

## Complexity

- Time: O(log n)
- Space: O(1)

## Review Prompt

Why is `right = num` safe even though the true square root is much smaller for
large `num`?
