# Valid Parentheses

- Pattern: stack
- Original attempt: [submissions/0020-valid-parentheses](../../submissions/0020-valid-parentheses/)

## Model Solution

```python
class Solution:
    def isValid(self, s: str) -> bool:
        pairs = {")": "(", "]": "[", "}": "{"}
        stack = []

        for char in s:
            if char in pairs.values():
                stack.append(char)
            else:
                if not stack or stack[-1] != pairs[char]:
                    return False
                stack.pop()

        return not stack
```

## Why This Is The Model

Balanced brackets are not just about counts. The closing bracket must match the
most recent unmatched opening bracket, and "most recent unmatched" is exactly
what a stack stores.

## Invariant

After reading each character, `stack` contains the opening brackets that have
not yet been closed, in the order they must be closed.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why does `([)]` fail even though every bracket type has the right count?
