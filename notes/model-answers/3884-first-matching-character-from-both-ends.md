# First Matching Character From Both Ends

- Pattern: mirrored index scan
- Original attempt: [submissions/3884-first-matching-character-from-both-ends](../../submissions/3884-first-matching-character-from-both-ends/)

## Model Solution

```python
class Solution:
    def firstMatchingIndex(self, s: str) -> int:
        n = len(s)
        for i in range(n):
            if s[i] == s[n - i - 1]:
                return i
        return -1
```

## Why This Is The Model

The accepted solution scans indices from left to right and compares each character with its mirrored character from the right.

## Invariant or Proof Idea

Because indices are checked in increasing order, the first equality found is the smallest matching index.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why is the mirrored index `n - i - 1` instead of `n - i`?
