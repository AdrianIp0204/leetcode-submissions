# Height Checker

- Pattern: sort and compare
- Original attempt: [submissions/1051-height-checker](../../submissions/1051-height-checker/)

## Model Solution

```python
class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        expected = sorted(heights)
        mismatches = 0

        for actual, target in zip(heights, expected):
            if actual != target:
                mismatches += 1

        return mismatches
```

## Why This Is The Model

The sorted order is the expected nondecreasing line. Comparing it with the
original list counts exactly the positions where a student is not standing in
the expected place, while leaving the input order available for comparison.

## Invariant

After comparing each pair of positions, `mismatches` is the number of differing
positions in the prefix processed so far.

## Complexity

- Time: O(n log n)
- Space: O(n)

## Review Prompt

Why does using `sorted(heights)` avoid the mutation issue caused by
`heights.sort()`?
