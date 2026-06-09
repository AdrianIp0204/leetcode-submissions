# Palindrome Number

- Pattern: reverse half / numeric comparison
- Original attempt: [submissions/0009-palindrome-number](../../submissions/0009-palindrome-number/)

## Model Solution

```python
class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0 or (x % 10 == 0 and x != 0):
            return False

        reversed_half = 0

        while x > reversed_half:
            reversed_half = reversed_half * 10 + x % 10
            x //= 10

        return x == reversed_half or x == reversed_half // 10
```

## Why This Is The Model

The accepted attempt decomposes the whole number into digit lists. The model
answer only reverses the right half of the number. Once the reversed half is at
least as large as the remaining left half, enough digits have been compared.

This avoids string/list conversion and handles odd-length numbers by dropping
the middle digit with `reversed_half // 10`.

## Invariant

Each loop moves the current last digit of `x` into `reversed_half`. The remaining
`x` is the left side of the number, and `reversed_half` is the reversed right
side.

## Complexity

- Time: O(log10(x))
- Space: O(1)

## Review Prompt

Why are negative numbers and nonzero numbers ending in `0` rejected before the
loop?
