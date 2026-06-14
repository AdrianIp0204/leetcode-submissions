# Reverse Degree of a String

- Pattern: weighted character accumulation
- Original attempt: [submissions/3498-reverse-degree-of-a-string](../../submissions/3498-reverse-degree-of-a-string/)

## Model Solution

```python
class Solution:
    def reverseDegree(self, s: str) -> int:
        res = 0
        for i in range(len(s)):
            res += (123-ord(s[i]))*(i+1)
        return res
```

## Why This Is The Model

The accepted solution computes the reverse alphabet value directly from ASCII and accumulates the required position-weighted score in one pass.

## Invariant or Proof Idea

After processing index `i`, `res` equals the sum of reverse-degree contributions for every character in `s[:i + 1]`.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why does the position multiplier need to be `i + 1` instead of `i`?
