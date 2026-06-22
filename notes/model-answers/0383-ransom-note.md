# Ransom Note

- Pattern: frequency counting
- Original attempt: [submissions/0383-ransom-note](../../submissions/0383-ransom-note/)

## Model Solution

```python
from collections import Counter


class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        need = Counter(ransomNote)
        have = Counter(magazine)

        for ch, amount in need.items():
            if have[ch] < amount:
                return False
        return True
```

## Why This Is The Model

The accepted solution already uses the key pattern: compare required character
counts against available character counts. The model keeps the variable names
explicit so the direction of the comparison is easy to audit.

## Invariant

Every processed character has enough copies in `magazine`; a single shortage is
enough to prove construction is impossible.

## Complexity

- Time: O(r + m), where r and m are the string lengths
- Space: O(u), where u is the number of distinct characters counted

## Review Prompt

Why is it safer to compare counts than to remove characters one at a time?

