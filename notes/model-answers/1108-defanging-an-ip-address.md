# Defanging an IP Address

- Pattern: string replacement
- Original attempt: [submissions/1108-defanging-an-ip-address](../../submissions/1108-defanging-an-ip-address/)

## Model Solution

```python
class Solution:
    def defangIPaddr(self, address: str) -> str:
        return address.replace(".", "[.]")
```

## Why This Is The Model

The task is a literal text transformation: every dot becomes `[.]`, and every
other character stays unchanged. `replace` expresses that requirement directly
without unnecessary parsing.

## Invariant

Every dot in `address` is replaced exactly once, and every non-dot character is
copied unchanged into the returned string.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why is there no need to split the IP address into octets for this problem?
