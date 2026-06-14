# Reverse Only Letters

- Pattern: two pointers / filtered reverse
- Original attempt: [submissions/0917-reverse-only-letters](../../submissions/0917-reverse-only-letters/)

## Model Solution

```python
class Solution:
    def reverseOnlyLetters(self, s: str) -> str:
        right = len(s) - 1
        res = []
        for w in s:
            if 96 < ord(w) < 123 or 64 < ord(w) < 91:
                while ord(s[right]) < 65 or 90 < ord(s[right]) < 97:
                    right -= 1
                res.append(s[right])
                right -= 1
            else:
                res.append(w)
        return "".join(res)
```

## Why This Is The Model

The accepted solution consumes letters from the right only when a left-side letter slot needs filling.

## Invariant or Proof Idea

After processing a prefix, all non-letter positions in that prefix are unchanged and all letter slots are filled with the next unused letter from the suffix.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why does the right pointer skip non-letter characters?
