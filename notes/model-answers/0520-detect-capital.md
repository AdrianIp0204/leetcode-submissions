# Detect Capital

- Pattern: string case predicates
- Original attempt: [submissions/0520-detect-capital](../../submissions/0520-detect-capital/)

## Model Solution

```python
class Solution:
    def detectCapitalUse(self, w: str) -> bool:
        return True if w.islower() or w.isupper() or w.istitle() else False
```

## Why This Is The Model

The accepted solution names the three legal states and lets built-ins handle every character consistently.

## Invariant or Proof Idea

The result is true exactly when the whole word belongs to one of the three allowed case classes.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Which valid capitalization pattern does `istitle()` cover?
