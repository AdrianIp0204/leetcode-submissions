# Minimize String Length

- Pattern: unique-character counting
- Original attempt: [submissions/2716-minimize-string-length](../../submissions/2716-minimize-string-length/)

## Model Solution

```python
class Solution:
    def minimizedStringLength(self, s: str) -> int:
        return len(set(s))
```

## Why This Is The Model

The final length depends only on how many distinct characters remain possible,
so a set captures the whole state.

## Invariant

`set(s)` contains each character from the input exactly once.

## Complexity

- Time: O(n)
- Space: O(k)

## Review Prompt

Why do repeated copies of the same character not change the answer?
