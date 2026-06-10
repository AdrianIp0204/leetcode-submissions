# Length of Last Word

- Pattern: reverse string scan
- Original attempt: [submissions/0058-length-of-last-word](../../submissions/0058-length-of-last-word/)

## Model Solution

```python
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        i = len(s) - 1

        while i >= 0 and s[i] == " ":
            i -= 1

        length = 0
        while i >= 0 and s[i] != " ":
            length += 1
            i -= 1

        return length
```

## Why This Is The Model

`s.split()[-1]` is perfectly Pythonic and accepted, but it builds a list of all
words when only the final word matters. The model answer scans from the end,
skips trailing spaces, and then counts the last word directly.

## Invariant

After the first loop, `i` points at the final non-space character. The second
loop counts exactly the contiguous non-space block ending there.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

What changes if the string has many trailing spaces?
