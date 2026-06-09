# Integer to Roman

- Pattern: greedy conversion / descending symbols
- Original attempt: [submissions/0012-integer-to-roman](../../submissions/0012-integer-to-roman/)

## Model Solution

```python
class Solution:
    def intToRoman(self, num: int) -> str:
        values = [
            (1000, "M"),
            (900, "CM"),
            (500, "D"),
            (400, "CD"),
            (100, "C"),
            (90, "XC"),
            (50, "L"),
            (40, "XL"),
            (10, "X"),
            (9, "IX"),
            (5, "V"),
            (4, "IV"),
            (1, "I"),
        ]
        result = []

        for value, symbol in values:
            while num >= value:
                result.append(symbol)
                num -= value

        return "".join(result)
```

## Why This Is The Model

The accepted attempt handles each digit position with separate cases. The model
answer lists the Roman symbols, including subtractive pairs, from largest to
smallest and greedily consumes the number.

This works because standard Roman notation always uses the largest valid symbol
or subtractive pair before moving to smaller values.

## Invariant

After each append, `result` is the Roman representation of the amount already
subtracted from the original number, and `num` is the remaining amount still to
encode.

## Complexity

- Time: O(1), because the input range and symbol table are fixed
- Space: O(1)

## Review Prompt

Why must pairs like `"CM"` and `"IV"` appear before `"D"` and `"I"` in the table?
