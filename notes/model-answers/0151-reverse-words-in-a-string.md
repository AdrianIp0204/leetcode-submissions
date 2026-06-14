# Reverse Words in a String

- Pattern: string normalization with split/join
- Original attempt: [submissions/0151-reverse-words-in-a-string](../../submissions/0151-reverse-words-in-a-string/)

## Model Solution

```python
class Solution:
    def reverseWords(self, s: str) -> str:
        return " ".join(reversed(s.split()))
```

## Why This Is The Model

The one-line model uses Python's word parser instead of hand-managing spaces, so all spacing edge cases are handled by the language primitive.

## Invariant or Proof Idea

After `s.split()`, every item is a non-empty word in original order; reversing only changes word order, not word content.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why does `split()` handle multiple spaces better than `split(' ')` here?
