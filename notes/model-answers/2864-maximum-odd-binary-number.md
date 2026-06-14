# Maximum Odd Binary Number

- Pattern: greedy bit arrangement
- Original attempt: [submissions/2864-maximum-odd-binary-number](../../submissions/2864-maximum-odd-binary-number/)

## Model Solution

```python
class Solution:
    def maximumOddBinaryNumber(self, s: str) -> str:
        ones = s.count("1")
        zeros = len(s) - ones
        return "1" * (ones - 1) + "0" * zeros + "1"
```

## Why This Is The Model

An odd binary number must end in `1`, so reserve one `1` for the last bit. Every
remaining `1` should move as far left as possible because earlier bits have
larger place value, and all zeros belong between the leading ones and the final
odd bit.

## Invariant

The result uses exactly the same count of zeros and ones as `s`, ends with `1`,
and places every non-final `1` before every zero.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why is it never optimal to place a zero before a remaining non-final `1`?
