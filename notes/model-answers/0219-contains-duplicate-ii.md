# Contains Duplicate II

- Pattern: latest-index hash map
- Original attempt: [submissions/0219-contains-duplicate-ii](../../submissions/0219-contains-duplicate-ii/)

## Model Solution

```python
class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        last_seen = {}

        for i, num in enumerate(nums):
            if num in last_seen and i - last_seen[num] <= k:
                return True
            last_seen[num] = i

        return False
```

## Why This Is The Model

Only the nearest previous occurrence can make the current index valid. Keeping the
latest index for each value gives that nearest distance in one pass.

## Invariant

Before processing index `i`, `last_seen[x]` is the largest index below `i` where
`x` appeared.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why is it safe to overwrite an older index after checking the current distance?
