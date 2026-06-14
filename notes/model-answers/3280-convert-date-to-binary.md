# Convert Date to Binary

- Pattern: split-map-join conversion
- Original attempt: [submissions/3280-convert-date-to-binary](../../submissions/3280-convert-date-to-binary/)

## Model Solution

```python
class Solution:
    def convertDateToBinary(self, date: str) -> str:
        return "-".join(f"{int(i):b}" for i in date.split("-"))
```

## Why This Is The Model

The accepted solution is a compact field-wise conversion and does not over-parse the date.

## Invariant or Proof Idea

Each output field is the base-2 representation of the corresponding input date field.

## Complexity

- Time: O(1) for fixed date length
- Space: O(1)

## Review Prompt

Why should the month and day be converted with `int()` first?
