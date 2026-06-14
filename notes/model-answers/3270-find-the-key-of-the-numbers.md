# Find the Key of the Numbers

- Pattern: digit-wise minimum construction
- Original attempt: [submissions/3270-find-the-key-of-the-numbers](../../submissions/3270-find-the-key-of-the-numbers/)

## Model Solution

```python
class Solution:
    def generateKey(self, num1: int, num2: int, num3: int) -> int:
        key = 0
        place = 1

        for _ in range(4):
            digit = min(num1 % 10, num2 % 10, num3 % 10)
            key += digit * place
            num1 //= 10
            num2 //= 10
            num3 //= 10
            place *= 10

        return key
```

## Why This Is The Model

The key is defined independently at each of four decimal positions. Taking the
minimum current digit and rebuilding the answer with a place multiplier preserves
each digit in its original position.

## Invariant

After `k` iterations, `key` contains the correct lowest `k` digits of the final
answer, and the three input numbers have been shifted past those digits.

## Complexity

- Time: O(1)
- Space: O(1)

## Review Prompt

Why do missing leading digits naturally behave like zero in this loop?
