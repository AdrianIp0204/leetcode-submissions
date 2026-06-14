# Kids With the Greatest Number of Candies

- Pattern: threshold comparison
- Original attempt: [submissions/1431-kids-with-the-greatest-number-of-candies](../../submissions/1431-kids-with-the-greatest-number-of-candies/)

## Model Solution

```python
class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        current_max = max(candies)
        return [candy + extraCandies >= current_max for candy in candies]
```

## Why This Is The Model

The benchmark is fixed: the greatest current candy count. Each child can reach
the greatest count if adding all extra candies meets or exceeds that benchmark,
so the output can be built with one direct comparison per child.

## Invariant

For each processed child, the returned boolean is true exactly when that child's
possible total is at least `current_max`.

## Complexity

- Time: O(n)
- Space: O(n) for the output

## Review Prompt

Why does tying the current maximum count still return `True`?
