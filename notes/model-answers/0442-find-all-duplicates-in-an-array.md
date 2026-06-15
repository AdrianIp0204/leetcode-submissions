# Find All Duplicates in an Array

- Pattern: frequency counting
- Original attempt: [submissions/0442-find-all-duplicates-in-an-array](../../submissions/0442-find-all-duplicates-in-an-array/)

## Model Solution

```python
class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        counts = Counter(nums)
        return [num for num, count in counts.items() if count == 2]
```

## Why This Is The Model

The submitted solution is direct and clear: count each value once, then filter to
the values that appeared twice. A lower-space variant can mark visited indices in
the input array, but counting is the easiest version to verify.

## Invariant

After building `counts`, each key maps to the number of times it appears in
`nums`.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

How would the solution change if extra space were not allowed?
