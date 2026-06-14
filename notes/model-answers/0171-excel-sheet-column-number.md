# Excel Sheet Column Number

- Pattern: base-26 accumulation
- Original attempt: [submissions/0171-excel-sheet-column-number](../../submissions/0171-excel-sheet-column-number/)

## Model Solution

```python
class Solution:
    def titleToNumber(self, s: str) -> int:
        res = 0
        for c in s:
            res = res * 26 + (ord(c) - 64)
        return res
```

## Why This Is The Model

The accepted solution is the direct base conversion and keeps only the running total.

## Invariant or Proof Idea

After processing a prefix, `res` is exactly the numeric value of that prefix as an Excel column label.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why does the previous result need to be multiplied by 26 before adding the next letter?
