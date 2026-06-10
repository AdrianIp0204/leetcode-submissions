# How Many Numbers Are Smaller Than the Current Number

- Pattern: sorting / rank by first occurrence
- Original attempt: [submissions/1365-how-many-numbers-are-smaller-than-the-current-number](../../submissions/1365-how-many-numbers-are-smaller-than-the-current-number/)

## Model Solution

```python
class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        first_index = {}

        for index, value in enumerate(sorted(nums)):
            if value not in first_index:
                first_index[value] = index

        return [first_index[value] for value in nums]
```

## Why This Is The Model

In sorted order, the first position of a value is exactly the count of elements
strictly smaller than it. Recording only the first occurrence also handles
duplicates correctly, because equal values should all receive the same count.

## Invariant

For every key in `first_index`, its stored index is the number of sorted elements
that are strictly smaller than that key.

## Complexity

- Time: O(n log n)
- Space: O(n)

## Review Prompt

Why does the first sorted index of a duplicated value give the correct smaller
count for every copy?
