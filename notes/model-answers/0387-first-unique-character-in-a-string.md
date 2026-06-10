# First Unique Character in a String

- Pattern: frequency map plus ordered scan
- Original attempt: [submissions/0387-first-unique-character-in-a-string](../../submissions/0387-first-unique-character-in-a-string/)

## Model Solution

```python
class Solution:
    def firstUniqChar(self, s: str) -> int:
        freq = {}

        for char in s:
            freq[char] = freq.get(char, 0) + 1

        for i, char in enumerate(s):
            if freq[char] == 1:
                return i

        return -1
```

## Why This Is The Model

The first pass answers whether a character is unique, and the second pass preserves
the original order so the first unique index is returned.

## Invariant

During the second pass, every index before `i` has already been proven non-unique.

## Complexity

- Time: O(n)
- Space: O(k), where `k` is the number of distinct characters

## Review Prompt

Why is a second pass needed after the frequency map is built?
