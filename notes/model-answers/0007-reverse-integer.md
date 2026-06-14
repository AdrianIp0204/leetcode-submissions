# Reverse Integer

- Pattern: digit extraction / overflow guard
- Original attempt: [submissions/0007-reverse-integer](../../submissions/0007-reverse-integer/)

## Model Solution

```python
class Solution:
    def reverse(self, x: int) -> int:
        sign = -1 if x < 0 else 1
        x = abs(x)
        limit = 2**31 - 1 if sign == 1 else 2**31
        reversed_value = 0

        while x:
            digit = x % 10
            x //= 10

            if reversed_value > (limit - digit) // 10:
                return 0

            reversed_value = reversed_value * 10 + digit

        return sign * reversed_value
```

## Why This Is The Model

The accepted attempt uses strings to reverse the digits and checks overflow at
the end. The model answer builds the reversed integer one digit at a time and
checks whether adding the next digit would exceed the signed 32-bit range.

This is the version to learn because it separates sign handling, digit
extraction, and overflow reasoning.

## Invariant

Before each new digit is appended, `reversed_value` is the reverse of the digits
already removed from the original absolute value. The overflow check guarantees
that multiplying by 10 and adding `digit` will stay inside the allowed range.

## Complexity

- Time: O(log10(abs(x)))
- Space: O(1)

## Review Prompt

Why does the overflow check happen before appending the next digit?
