# Total Waviness of Numbers in Range I

- Pattern: range brute force / digit triples
- Original attempt: [submissions/3751-total-waviness-of-numbers-in-range-i](../../submissions/3751-total-waviness-of-numbers-in-range-i/)

## Model Solution

```python
class Solution:
    def totalWaviness(self, num1: int, num2: int) -> int:
        total = 0

        for value in range(num1, num2 + 1):
            digits = str(value)
            for i in range(1, len(digits) - 1):
                left = digits[i - 1]
                middle = digits[i]
                right = digits[i + 1]

                if left < middle > right or left > middle < right:
                    total += 1

        return total
```

## Why This Is The Model

Version I is small enough for direct enumeration, and the direct test matches
the definition exactly: only an interior digit can be a peak or a valley compared
with its two neighbors.

## Invariant

After processing a number, `total` includes every peak or valley from all
numbers scanned so far and no endpoint digits.

## Complexity

- Time: O(R * d), where R is `num2 - num1 + 1` and d is the digit length
- Space: O(d) for each string representation

## Review Prompt

Why can the first and last digits of a number never add waviness?
