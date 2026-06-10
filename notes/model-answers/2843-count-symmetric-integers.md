# Count Symmetric Integers

- Pattern: digit-sum brute force
- Original attempt: [submissions/2843-count-symmetric-integers](../../submissions/2843-count-symmetric-integers/)

## Model Solution

```python
class Solution:
    def countSymmetricIntegers(self, low: int, high: int) -> int:
        count = 0

        for num in range(low, high + 1):
            digits = str(num)
            if len(digits) % 2 == 1:
                continue

            mid = len(digits) // 2
            left = sum(int(digit) for digit in digits[:mid])
            right = sum(int(digit) for digit in digits[mid:])
            if left == right:
                count += 1

        return count
```

## Why This Is The Model

The model keeps the definition visible: a symmetric integer has an even number of
digits and equal digit sums on both halves. Converting to a string avoids special
cases for two- and four-digit numbers while staying simple for the small input
range.

## Invariant

After processing each integer in `[low, num]`, `count` equals the number of
even-length values seen so far whose left and right digit sums match.

## Complexity

- Time: O((high - low + 1) * d), where `d` is the number of digits
- Space: O(d)

## Review Prompt

Why must odd-length numbers be skipped before comparing digit sums?
