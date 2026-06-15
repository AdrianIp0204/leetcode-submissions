# Sum of Unique Elements

- Pattern: frequency map
- Original attempt: [submissions/1748-sum-of-unique-elements](../../submissions/1748-sum-of-unique-elements/)

## Model Solution

```python
class Solution:
    def sumOfUnique(self, nums: List[int]) -> int:
        counts = Counter(nums)
        ans = 0
        for value, count in counts.items():
            if count == 1:
                ans += value
        return ans
```

## Why This Is The Model

The accepted solution counts every value once, then adds only values whose count is exactly one.

## Invariant or Proof Idea

Each key in the counter represents one distinct number, so adding keys with count `1` includes every unique element and excludes all repeated values.

## Complexity

- Time: O(n)
- Space: O(k), where `k` is the number of distinct values

## Review Prompt

Why should the sum add the key, not the count?
