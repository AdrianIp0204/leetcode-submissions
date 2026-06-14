# Check Divisibility by Digit Sum and Product

- Pattern: digit aggregate divisibility
- Original attempt: [submissions/3622-check-divisibility-by-digit-sum-and-product](../../submissions/3622-check-divisibility-by-digit-sum-and-product/)

## Model Solution

```python
class Solution:
    def checkDivisibility(self, n: int) -> bool:
        remaining = n
        digit_sum = 0
        digit_product = 1

        while remaining:
            digit = remaining % 10
            digit_sum += digit
            digit_product *= digit
            remaining //= 10

        return n % (digit_sum + digit_product) == 0
```

## Why This Is The Model

The divisibility test depends on the original number, but digit extraction
destroys the working copy. Keeping `n` unchanged while consuming `remaining`
lets the final modulo compare against the required original value.

## Invariant

After each loop iteration, `digit_sum` and `digit_product` describe exactly the
digits already removed from `remaining`.

## Complexity

- Time: O(d)
- Space: O(1)

## Review Prompt

Why does the algorithm need a separate `remaining` variable instead of modifying
`n` directly?
