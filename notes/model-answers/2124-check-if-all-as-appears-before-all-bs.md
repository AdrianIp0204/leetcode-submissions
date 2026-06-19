# Check if All A's Appears Before All B's

- Pattern: state flag scan
- Original attempt: [submissions/2124-check-if-all-as-appears-before-all-bs](../../submissions/2124-check-if-all-as-appears-before-all-bs/)

## Model Solution

```python
class Solution:
    def checkString(self, s: str) -> bool:
        seen_b = False

        for ch in s:
            if ch == "b":
                seen_b = True
            elif seen_b:
                return False

        return True
```

## Why This Is The Model

The accepted solution tracks whether the scan has entered the `b` region. Once a
`b` has appeared, any later `a` violates the required order.

## Invariant

Before each character is processed, `seen_b` records whether the prefix has
already reached the suffix of `b` characters.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why does finding one `a` after a `b` prove the whole string is invalid?
