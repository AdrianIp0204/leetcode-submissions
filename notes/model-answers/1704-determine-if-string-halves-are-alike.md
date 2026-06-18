# Determine if String Halves Are Alike

- Pattern: counting with balance
- Original attempt: [submissions/1704-determine-if-string-halves-are-alike](../../submissions/1704-determine-if-string-halves-are-alike/)

## Model Solution

```python
class Solution:
    def halvesAreAlike(self, s: str) -> bool:
        vowels = set("aeiouAEIOU")
        mid = len(s) // 2
        balance = 0

        for ch in s[:mid]:
            if ch in vowels:
                balance += 1
        for ch in s[mid:]:
            if ch in vowels:
                balance -= 1

        return balance == 0
```

## Why This Is The Model

A single balance variable compares the two counts without storing both counts
separately.

## Invariant

`balance` is first-half vowel count minus second-half vowel count for the
characters scanned so far.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why does the vowel set need uppercase and lowercase letters?
