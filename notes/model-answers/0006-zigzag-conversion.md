# Zigzag Conversion

- Pattern: simulation / row direction
- Original attempt: [submissions/0006-zigzag-conversion](../../submissions/0006-zigzag-conversion/)

## Model Solution

```python
class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1 or numRows >= len(s):
            return s

        rows = [[] for _ in range(numRows)]
        row = 0
        step = 1

        for ch in s:
            rows[row].append(ch)

            if row == 0:
                step = 1
            elif row == numRows - 1:
                step = -1

            row += step

        return "".join("".join(chars) for chars in rows)
```

## Why This Is The Model

The accepted attempt computes the cycle spacing directly. That is valid, but it
is easy to make off-by-one mistakes. The model answer simulates the written
zigzag: move down the rows, then up the rows, appending each character to the row
where it lands.

## Invariant

`row` is always the row where the next character belongs, and `step` records the
current direction through the zigzag. Direction changes only at the top and
bottom rows.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why can we return `s` immediately when `numRows` is `1`?
