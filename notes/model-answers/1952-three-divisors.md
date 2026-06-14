# Three Divisors

- Pattern: perfect square of a prime
- Original attempt: [submissions/1952-three-divisors](../../submissions/1952-three-divisors/)

## Model Solution

```python
class Solution:
    def isThree(self, n: int) -> bool:
        if n < 4:
            return False
        s = sqrt(n)
        if not s.is_integer():
            return False
        for i in range(2, int(s)):
            if n % i == 0:
                return False
        return True
```

## Why This Is The Model

The accepted solution first requires an integer square root, then verifies that no smaller divisor divides that square root.

## Invariant or Proof Idea

If the integer square root has no divisor from `2` up to one less than itself, the only divisors of `n` are `1`, `sqrt(n)`, and `n`.

## Complexity

- Time: O(sqrt(sqrt(n))) in this implementation's primality check
- Space: O(1)

## Review Prompt

Why must a number with exactly three divisors be a perfect square?
