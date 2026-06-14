# Sum Multiples

- Pattern: inclusion-exclusion over multiples
- Original attempt: [submissions/2652-sum-multiples](../../submissions/2652-sum-multiples/)

## Model Solution

```python
class Solution:
    def sumOfMultiples(self, n: int) -> int:
        def sum_multiples_of(divisor: int) -> int:
            count = n // divisor
            return divisor * count * (count + 1) // 2

        return (
            sum_multiples_of(3)
            + sum_multiples_of(5)
            + sum_multiples_of(7)
            - sum_multiples_of(15)
            - sum_multiples_of(21)
            - sum_multiples_of(35)
            + sum_multiples_of(105)
        )
```

## Why This Is The Model

The direct scan is perfectly acceptable, but the arithmetic version teaches the
set-counting issue: numbers divisible by two bases are counted twice unless the
pairwise intersections are subtracted, and the triple intersection is added back.

## Invariant

Each positive integer at most `n` contributes exactly once if it is divisible by
3, 5, or 7, and zero times otherwise.

## Complexity

- Time: O(1)
- Space: O(1)

## Review Prompt

Why does the formula add back multiples of `105` after subtracting multiples of
`15`, `21`, and `35`?
