# Count Asterisks

- Pattern: delimited-string scanning
- Original attempt: [submissions/2315-count-asterisks](../../submissions/2315-count-asterisks/)

## Model Solution

```python
class Solution:
    def countAsterisks(self, s: str) -> int:
        parts = s.split("|")
        ans = 0

        for i in range(0, len(parts), 2):
            ans += parts[i].count("*")

        return ans
```

## Why This Is The Model

Splitting on the delimiter turns alternating outside/inside regions into even
and odd indices. Only even-indexed regions are counted.

## Invariant

Segments with even indices are outside delimiter pairs; odd indices are inside
them.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

How could you solve this with a boolean flag instead of `split`?
