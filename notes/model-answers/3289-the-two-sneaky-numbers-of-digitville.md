# The Two Sneaky Numbers of Digitville

- Pattern: frequency counting
- Original attempt: [submissions/3289-the-two-sneaky-numbers-of-digitville](../../submissions/3289-the-two-sneaky-numbers-of-digitville/)

## Model Solution

```python
class Solution:
    def getSneakyNumbers(self, nums: List[int]) -> List[int]:
        seen = set()
        duplicates = []

        for num in nums:
            if num in seen:
                duplicates.append(num)
            else:
                seen.add(num)

        return duplicates
```

## Why This Is The Model

Each sneaky number is the second appearance of a value that should have appeared
once. A set is enough to distinguish first sightings from repeats, and the
problem guarantees exactly two repeated values.

## Invariant

Before processing `num`, `seen` contains every distinct value already scanned;
therefore `num in seen` is true exactly when the current occurrence is a repeat.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why is a set sufficient here even though the accepted attempt used a count map?
