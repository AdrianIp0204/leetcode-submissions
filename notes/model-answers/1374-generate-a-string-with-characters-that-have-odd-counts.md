# Generate a String With Characters That Have Odd Counts

- Pattern: parity construction
- Original attempt: [submissions/1374-generate-a-string-with-characters-that-have-odd-counts](../../submissions/1374-generate-a-string-with-characters-that-have-odd-counts/)

## Model Solution

```python
class Solution:
    def generateTheString(self, n: int) -> str:
        if n % 2 == 1:
            return "a" * n
        return "a" * (n - 1) + "b"
```

## Why This Is The Model

The submitted solution is already the compact construction. If `n` is odd, one
character repeated `n` times has an odd count. If `n` is even, using `n - 1`
copies of one character and one copy of another gives two odd counts.

## Invariant

The returned string always has length `n`, and every character count in the
construction is odd.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why does the even case need two distinct characters?
