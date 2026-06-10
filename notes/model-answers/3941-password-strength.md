# Password Strength

- Pattern: distinct-character category scoring
- Original attempt: [submissions/3941-password-strength](../../submissions/3941-password-strength/)

## Model Solution

```python
class Solution:
    def passwordStrength(self, password: str) -> int:
        score = 0

        for ch in set(password):
            if ch.islower():
                score += 1
            elif ch.isupper():
                score += 2
            elif ch.isdigit():
                score += 3
            else:
                score += 5

        return score
```

## Why This Is The Model

The scoring is based on distinct characters, so converting the password to a set
prevents repeated characters from being counted multiple times. The string
predicate methods make the category checks explicit.

## Invariant

After processing any subset of `set(password)`, `score` is the sum of the
category scores for exactly those distinct characters.

## Complexity

- Time: O(n)
- Space: O(n) for the set of distinct characters

## Review Prompt

Why should the password `"aaa"` receive the same score as `"a"`?
