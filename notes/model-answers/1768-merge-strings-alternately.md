# Merge Strings Alternately

- Pattern: two-string interleaving
- Original attempt: [submissions/1768-merge-strings-alternately](../../submissions/1768-merge-strings-alternately/)

## Model Solution

```python
class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        merged = []
        i = 0

        while i < len(word1) or i < len(word2):
            if i < len(word1):
                merged.append(word1[i])
            if i < len(word2):
                merged.append(word2[i])
            i += 1

        return "".join(merged)
```

## Why This Is The Model

The same index can be used for both strings. At each step, append the character
from `word1` if it exists, then the character from `word2` if it exists. This
naturally handles unequal lengths without separate leftover loops.

## Invariant

After index `i - 1` is processed, `merged` contains the correct alternating
merge for all available characters up to that index in both strings.

## Complexity

- Time: O(n + m)
- Space: O(n + m) for the merged output

## Review Prompt

Why do the bounds checks allow one loop to handle both equal and unequal string
lengths?
