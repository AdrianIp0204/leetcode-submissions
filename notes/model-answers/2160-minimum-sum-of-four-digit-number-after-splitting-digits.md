# Minimum Sum of Four Digit Number After Splitting Digits

- Pattern: greedy digit distribution
- Original attempt: [submissions/2160-minimum-sum-of-four-digit-number-after-splitting-digits](../../submissions/2160-minimum-sum-of-four-digit-number-after-splitting-digits/)

## Model Solution

```python
class Solution:
    def minimumSum(self, num: int) -> int:
        digits = sorted(str(num))
        return int(digits[0] + digits[2]) + int(digits[1] + digits[3])
```

## Why This Is The Model

To minimize the sum of two two-digit numbers, place the two smallest digits in
the tens positions where they have the largest weight. The two larger digits can
then be used as ones digits, producing the minimum possible sum.

## Invariant

In the optimal split, no larger digit should occupy a tens place while a smaller
digit occupies a ones place, because swapping them would reduce the sum.

## Complexity

- Time: O(1), sorting exactly four digits
- Space: O(1)

## Review Prompt

Why are zeros still useful digits when constructing the two minimized numbers?
