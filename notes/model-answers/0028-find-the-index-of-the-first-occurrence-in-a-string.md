# Find the Index of the First Occurrence in a String

- Pattern: string matching / KMP
- Original attempt: [submissions/0028-find-the-index-of-the-first-occurrence-in-a-string](../../submissions/0028-find-the-index-of-the-first-occurrence-in-a-string/)

## Model Solution

```python
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if needle == "":
            return 0

        lps = [0] * len(needle)
        length = 0
        i = 1

        while i < len(needle):
            if needle[i] == needle[length]:
                length += 1
                lps[i] = length
                i += 1
            elif length:
                length = lps[length - 1]
            else:
                i += 1

        j = 0
        for i, char in enumerate(haystack):
            while j and char != needle[j]:
                j = lps[j - 1]
            if char == needle[j]:
                j += 1
                if j == len(needle):
                    return i - len(needle) + 1

        return -1
```

## Why This Is The Model

Python's `index` is fine for production code, but it hides the string-matching
idea. KMP learns from partial matches: when a mismatch happens, it uses the
prefix table to avoid restarting from scratch.

## Invariant

During the scan, `j` is the length of the prefix of `needle` currently matched
as a suffix ending at the current `haystack` position.

## Complexity

- Time: O(h + n)
- Space: O(n)

## Review Prompt

What does `lps[j - 1]` let you reuse after a mismatch?
