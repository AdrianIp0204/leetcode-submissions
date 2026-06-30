# String to Integer (atoi)

- Pattern: string parsing / bounded integer simulation
- Original attempt: [submissions/0008-string-to-integer-atoi](../../submissions/0008-string-to-integer-atoi/)

## Model Solution

```python
class Solution:
    def myAtoi(self, s: str) -> int:
        i = 0
        n = len(s)
        limit_min = -(2**31)
        limit_max = 2**31 - 1

        while i < n and s[i] == " ":
            i += 1

        sign = 1
        if i < n and s[i] in "+-":
            if s[i] == "-":
                sign = -1
            i += 1

        value = 0
        while i < n and s[i].isdigit():
            value = value * 10 + int(s[i])
            if sign == 1 and value > limit_max:
                return limit_max
            if sign == -1 and -value < limit_min:
                return limit_min
            i += 1

        return sign * value
```

## Why This Is The Model

The accepted attempt has the right phases: discard leading spaces, read one
optional sign, consume digits, then clamp. The model answer keeps an index into
the original string instead of repeatedly slicing it, and it checks overflow as
digits are added.

## Invariant

During the digit loop, `value` is the integer represented by exactly the digits
already consumed after the optional sign. Any character outside that digit run
is ignored.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why should parsing stop at the first non-digit after the optional sign?
