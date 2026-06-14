# Digit Frequency Score

- Pattern: digit aggregation
- Original attempt: [submissions/3945-digit-frequency-score](../../submissions/3945-digit-frequency-score/)

## Model Solution

```python
class Solution:
    def digitFrequencyScore(self, n: int) -> int:
        return sum(int(digit) for digit in str(n))
```

## Why This Is The Model

For this task, the frequency-score computation reduces to adding the decimal
digits of the number. Converting to a string gives a simple left-to-right scan,
and each character is converted back to its numeric value before summing.

## Invariant

After reading any prefix of the digit string, the running sum equals the sum of
the digits in that prefix.

## Complexity

- Time: O(d), where d is the number of digits
- Space: O(d) for the string representation

## Review Prompt

Why does summing digit characters require converting each character with
`int()`?
