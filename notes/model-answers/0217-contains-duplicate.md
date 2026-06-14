# Contains Duplicate

- Pattern: set membership
- Original attempt: [submissions/0217-contains-duplicate](../../submissions/0217-contains-duplicate/)

## Model Solution

```python
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        seen = set()

        for num in nums:
            if num in seen:
                return True
            seen.add(num)

        return False
```

## Why This Is The Model

Counting works, but the problem only asks whether a value has appeared before.
That makes a set the simplest correct data structure.

## Invariant

Before each loop iteration, `seen` contains exactly the values already scanned.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

When would you need a dictionary of counts instead of a set?
