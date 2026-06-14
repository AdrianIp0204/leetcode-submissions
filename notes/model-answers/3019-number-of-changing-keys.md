# Number of Changing Keys

- Pattern: case-normalized adjacent comparison
- Original attempt: [submissions/3019-number-of-changing-keys](../../submissions/3019-number-of-changing-keys/)

## Model Solution

```python
class Solution:
    def countKeyChanges(self, s: str) -> int:
        s = s.lower()
        changes = 0

        for i in range(1, len(s)):
            if s[i] != s[i - 1]:
                changes += 1

        return changes
```

## Why This Is The Model

The problem treats uppercase and lowercase versions of the same letter as the
same key, so normalize first. Then the only moments that count are adjacent
normalized characters that differ.

## Invariant

After index `i` is checked, `changes` equals the number of key transitions among
adjacent pairs ending at or before `i`.

## Complexity

- Time: O(n)
- Space: O(n), because `lower()` creates a normalized string

## Review Prompt

What wrong answer would occur if case normalization happened after comparison?
