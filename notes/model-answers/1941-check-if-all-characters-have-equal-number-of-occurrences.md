# Check if All Characters Have Equal Number of Occurrences

- Pattern: frequency map + equal-count check
- Original attempt: [submissions/1941-check-if-all-characters-have-equal-number-of-occurrences](../../submissions/1941-check-if-all-characters-have-equal-number-of-occurrences/)

## Model Solution

```python
class Solution:
    def areOccurrencesEqual(self, s: str) -> bool:
        counts = Counter(s)
        first = next(iter(counts.values()))
        for count in counts.values():
            if count != first:
                return False
        return True
```

## Why This Is The Model

The accepted solution compares every character frequency against one reference frequency.

## Invariant or Proof Idea

If no count differs from the first count, all counts are equal; the first differing count is enough to return `False`.

## Complexity

- Time: O(n)
- Space: O(k), where `k` is the number of distinct characters

## Review Prompt

Why is one reference count enough?
