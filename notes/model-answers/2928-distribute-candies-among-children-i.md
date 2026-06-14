# Distribute Candies Among Children I

- Pattern: inclusion-exclusion counting
- Original attempt: [submissions/2928-distribute-candies-among-children-i](../../submissions/2928-distribute-candies-among-children-i/)

## Model Solution

```python
class Solution:
    def distributeCandies(self, n: int, limit: int) -> int:
        def unrestricted(total: int) -> int:
            if total < 0:
                return 0
            return (total + 1) * (total + 2) // 2

        over = limit + 1
        return (
            unrestricted(n)
            - 3 * unrestricted(n - over)
            + 3 * unrestricted(n - 2 * over)
            - unrestricted(n - 3 * over)
        )
```

## Why This Is The Model

Without the per-child limit, stars and bars gives the number of nonnegative
triples that sum to `n`. Inclusion-exclusion removes assignments where at least
one child receives `limit + 1` candies, adds back assignments where two children
are over the limit, and removes the case where all three are over the limit.

## Invariant

Each distribution is counted once exactly when all three children have at most
`limit` candies, because every violation set is corrected by inclusion-exclusion.

## Complexity

- Time: O(1)
- Space: O(1)

## Review Prompt

Why does an over-limit child consume `limit + 1` candies before the remaining
stars-and-bars count?
