# Is Subsequence

- Pattern: two pointers
- Original attempt: [submissions/0392-is-subsequence](../../submissions/0392-is-subsequence/)

## Model Solution

```python
class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        i = 0
        for ch in t:
            if i < len(s) and ch == s[i]:
                i += 1
        return i == len(s)
```

## Why This Is The Model

A subsequence only needs matching characters in order, not contiguously. One
pointer tracks the next character needed from `s`; the scan over `t` either
matches and advances that pointer or skips the current character.

## Invariant

After scanning any prefix of `t`, `i` is the length of the longest prefix of `s`
matched as a subsequence within that scanned prefix.

## Complexity

- Time: O(len(t))
- Space: O(1)

## Review Prompt

Why can skipped characters in `t` never hurt a future match?
