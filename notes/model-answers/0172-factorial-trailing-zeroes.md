# Factorial Trailing Zeroes

- Pattern: factor counting
- Original attempt: [submissions/0172-factorial-trailing-zeroes](../../submissions/0172-factorial-trailing-zeroes/)

## Model Solution

```python
class Solution:
    def trailingZeroes(self, n: int) -> int:
        zeroes = 0

        while n:
            n //= 5
            zeroes += n

        return zeroes
```

## Why This Is The Model

Every trailing zero comes from a factor pair `2 * 5`, and factorials have more
twos than fives. So the whole problem reduces to counting factors of five in
`n!`. Dividing by `5`, then `25`, then `125`, counts numbers that contribute
multiple fives.

## Invariant

After each division by `5`, `n` is the number of remaining multiples that
contribute at least one more factor of five.

## Complexity

- Time: O(log_5 n)
- Space: O(1)

## Review Prompt

Why does `25` contribute two factors of five instead of one?
