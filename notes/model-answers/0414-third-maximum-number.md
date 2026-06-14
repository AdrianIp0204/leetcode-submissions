# Third Maximum Number

- Pattern: distinct ranking
- Original attempt: [submissions/0414-third-maximum-number](../../submissions/0414-third-maximum-number/)

## Model Solution

```python
class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        first = second = third = None

        for num in nums:
            if num == first or num == second or num == third:
                continue

            if first is None or num > first:
                first, second, third = num, first, second
            elif second is None or num > second:
                second, third = num, second
            elif third is None or num > third:
                third = num

        return third if third is not None else first
```

## Why This Is The Model

The scan keeps only the three largest distinct values seen so far. Using `None`
as the empty marker avoids problems with negative numbers, and duplicate values
are skipped before they can shift the ranking.

## Invariant

After each number, `first`, `second`, and `third` are the largest, second
largest, and third largest distinct values among the processed numbers.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why must duplicates be skipped before comparing a value against the current top
three?
