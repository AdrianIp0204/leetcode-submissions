# Sum of Squares of Special Elements

- Pattern: one-based index filter
- Original attempt: [submissions/2778-sum-of-squares-of-special-elements](../../submissions/2778-sum-of-squares-of-special-elements/)

## Model Solution

```python
class Solution:
    def sumOfSquares(self, nums: List[int]) -> int:
        n = len(nums)
        total = 0

        for position, num in enumerate(nums, start=1):
            if n % position == 0:
                total += num * num

        return total
```

## Why This Is The Model

The problem defines special elements by one-based position. Starting
`enumerate` at one makes the divisibility test match the statement directly and
avoids repeated `i + 1` conversions.

## Invariant

After processing position `p`, `total` equals the sum of squares for all special
positions from `1` through `p`.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

How does `enumerate(nums, start=1)` reduce the chance of an off-by-one error
here?
