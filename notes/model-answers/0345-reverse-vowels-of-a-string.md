# Reverse Vowels of a String

- Pattern: two pointers / selective reversal
- Original attempt: [submissions/0345-reverse-vowels-of-a-string](../../submissions/0345-reverse-vowels-of-a-string/)

## Model Solution

```python
class Solution:
    def reverseVowels(self, s: str) -> str:
        vows = set("aeiouAEIOU")
        right = len(s) - 1
        res = []
        for w in s:
            if w not in vows:
                res.append(w)
            else:
                while s[right] not in vows:
                    right -= 1
                res.append(s[right])
                right -= 1
        return "".join(res)
```

## Why This Is The Model

The accepted solution uses a right pointer only for vowels, so every vowel is consumed in reverse order while non-vowels are copied unchanged.

## Invariant or Proof Idea

Before appending each output character, all earlier output positions already match the final string; `right` points at or before the next unused vowel from the end.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why can non-vowel characters be appended immediately without looking at the right pointer?
