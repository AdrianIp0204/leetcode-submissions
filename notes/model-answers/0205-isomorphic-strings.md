# Isomorphic Strings

- Pattern: one-to-one character mapping
- Original attempt: [submissions/0205-isomorphic-strings](../../submissions/0205-isomorphic-strings/)

## Model Solution

```python
class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        sap = {}
        used = set()
        for a, b in zip(s, t):
            if a not in sap:
                if b in used:
                    return False
                sap[a] = b
                used.add(b)
            elif sap[a] != b:
                return False
        return True
```

## Why This Is The Model

The accepted solution records the forward map and rejects reused target letters, which together enforce a bijection over the seen characters.

## Invariant or Proof Idea

After each pair, every previous source character has one fixed target and every used target belongs to only one source.

## Complexity

- Time: O(n)
- Space: O(k), where `k` is the number of distinct mapped characters

## Review Prompt

Why does the `used` set matter if the dictionary already remembers mappings?
