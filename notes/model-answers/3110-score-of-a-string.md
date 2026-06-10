# Score of a String

- Pattern: adjacent character differences
- Original attempt: [submissions/3110-score-of-a-string](../../submissions/3110-score-of-a-string/)

## Model Solution

```python
class Solution:
    def scoreOfString(self, s: str) -> int:
        score = 0

        for i in range(len(s) - 1):
            score += abs(ord(s[i]) - ord(s[i + 1]))

        return score
```

## Why This Is The Model

The score is a direct sum over adjacent pairs. Iterating to `len(s) - 1` keeps
the next character in bounds and avoids creating a sliced copy of the string.

## Invariant

After processing index `i`, `score` equals the sum of absolute ASCII differences
for all adjacent pairs from `s[0:2]` through `s[i:i+2]`.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why does the loop stop one character before the end of the string?
