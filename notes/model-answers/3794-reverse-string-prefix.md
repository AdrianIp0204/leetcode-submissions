# Reverse String Prefix

- Pattern: prefix slicing
- Original attempt: [submissions/3794-reverse-string-prefix](../../submissions/3794-reverse-string-prefix/)

## Model Solution

```python
class Solution:
    def reversePrefix(self, s: str, k: int) -> str:
        return s[k-1::-1]+s[k:]
```

## Why This Is The Model

The accepted solution is the direct slicing expression for the required prefix transform.

## Invariant or Proof Idea

The output consists of exactly the first `k` characters in reverse order followed by the original characters after `k`.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why does the suffix start at `s[k:]`?
