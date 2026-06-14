# Sort Array by Increasing Frequency

- Pattern: frequency map + custom sort
- Original attempt: [submissions/1636-sort-array-by-increasing-frequency](../../submissions/1636-sort-array-by-increasing-frequency/)

## Model Solution

```python
class Solution:
    def frequencySort(self, nums: List[int]) -> List[int]:
        nap = Counter(nums)
        nap = dict(sorted(nap.items(), key=lambda x:(x[1], -x[0])))
        res = []
        for k, v in nap.items():
            res.extend([k]*v)
        return res
```

## Why This Is The Model

The accepted solution separates counting, ordering, and expansion, which keeps the tie-breaker easy to inspect.

## Invariant or Proof Idea

After sorting the count items, every earlier key has lower frequency or the same frequency with a larger value.

## Complexity

- Time: O(n + u log u)
- Space: O(u + n) for counts and output

## Review Prompt

Why does the sort key use `(frequency, -value)`?
