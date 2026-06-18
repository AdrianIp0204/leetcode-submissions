# Count Residue Prefixes

- Pattern: prefix scan with distinct-count state
- Original attempt: [submissions/3803-count-residue-prefixes](../../submissions/3803-count-residue-prefixes/)

## Model Solution

```python
class Solution:
    def residuePrefixes(self, s: str) -> int:
        seen = set()
        length = 0
        ans = 0

        for ch in s:
            seen.add(ch)
            length += 1
            if length % 3 == len(seen):
                ans += 1
            if len(seen) >= 3:
                break

        return ans
```

## Why This Is The Model

Morrow draft: this mirrors the accepted code. The code-supported idea is to
track prefix length modulo three alongside the number of distinct characters in
the prefix, then stop once three distinct characters have appeared.

## Invariant

Before the optional early stop, `seen` contains the distinct characters in the
scanned prefix and `length` is that prefix length.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

What input constraint makes it correct to stop after three distinct characters?
