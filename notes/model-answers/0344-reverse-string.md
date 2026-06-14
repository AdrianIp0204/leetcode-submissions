# Reverse String

- Pattern: two pointers / in-place swap
- Original attempt: [submissions/0344-reverse-string](../../submissions/0344-reverse-string/)

## Model Solution

```python
class Solution:
    def reverseString(self, s: List[str]) -> None:
        left, right = 0, len(s) - 1

        while left < right:
            s[left], s[right] = s[right], s[left]
            left += 1
            right -= 1
```

## Why This Is The Model

`s.reverse()` is perfectly fine Python, but the model answer teaches the
language-independent two-pointer idea: swap symmetric positions and shrink the
window.

## Invariant

Everything outside the `[left, right]` window has already been swapped into its
final position.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why should this function return `None` instead of a new list?
