# Separate the Digits in an Array

- Pattern: ordered digit expansion
- Original attempt: [submissions/2553-separate-the-digits-in-an-array](../../submissions/2553-separate-the-digits-in-an-array/)

## Model Solution

```python
class Solution:
    def separateDigits(self, nums: List[int]) -> List[int]:
        digits = []

        for num in nums:
            for digit in str(num):
                digits.append(int(digit))

        return digits
```

## Why This Is The Model

The required output follows the same left-to-right order as the decimal string
for each number. Iterating over the string representation directly avoids the
reverse step needed by modulo extraction.

## Invariant

After each number is processed, `digits` is exactly the separated digit sequence
for the processed prefix of `nums`.

## Complexity

- Time: O(d), where `d` is the total number of digits
- Space: O(d) for the returned list

## Review Prompt

What output-order bug can appear if digits are extracted with `% 10` and appended
immediately?
