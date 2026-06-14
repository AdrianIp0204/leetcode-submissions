# To Lower Case

- Pattern: built-in string normalization
- Original attempt: [submissions/0709-to-lower-case](../../submissions/0709-to-lower-case/)

## Model Solution

```python
class Solution:
    def toLowerCase(self, s: str) -> str:
        return s.lower()
```

## Why This Is The Model

Python already provides the exact string normalization needed here. Calling
`lower()` makes the intent clear and avoids reimplementing character conversion
logic by hand.

## Invariant

The returned string has the same length and character order as `s`, with every
uppercase letter converted to lowercase.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why does this method return a new string instead of modifying `s` in place?
