# Unique Number of Occurrences

- Pattern: frequency map + uniqueness check
- Original attempt: [submissions/1207-unique-number-of-occurrences](../../submissions/1207-unique-number-of-occurrences/)

## Model Solution

```python
class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        counts = Counter(arr)
        return len(counts.values()) == len(set(counts.values()))
```

## Why This Is The Model

The accepted solution turns values into occurrence counts, then checks whether any count is duplicated.

## Invariant or Proof Idea

A set removes duplicate counts, so equal lengths mean every original count was distinct.

## Complexity

- Time: O(n)
- Space: O(k), where `k` is the number of distinct values

## Review Prompt

Why do the array values themselves no longer matter after building `Counter(arr)`?
