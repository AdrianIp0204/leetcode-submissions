# Excel Sheet Column Title

- Pattern: 1-indexed base-26 conversion
- Original attempt: [submissions/0168-excel-sheet-column-title](../../submissions/0168-excel-sheet-column-title/)

## Model Solution

```python
class Solution:
    def convertToTitle(self, n: int) -> str:
        res = []
        while n:
            rem = 26 if n%26 == 0 else n%26
            res.append(chr(rem + 64))
            n = (n - rem)//26
        res.reverse()
        return "".join(res)
```

## Why This Is The Model

The accepted solution explicitly maps remainder 0 to 26 before shrinking `n`, which avoids the common off-by-one bug around `Z`, `AZ`, and `ZZ`.

## Invariant or Proof Idea

Each loop removes the rightmost Excel digit from `n`; after subtracting that digit, the remaining prefix is divisible by 26.

## Complexity

- Time: O(log_26 n)
- Space: O(log_26 n)

## Review Prompt

Why does a remainder of zero mean `Z` instead of a new leading digit?
