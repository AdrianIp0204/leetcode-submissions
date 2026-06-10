# Difference Between Element Sum and Digit Sum of an Array

- Pattern: digit expansion
- Original attempt: [submissions/2535-difference-between-element-sum-and-digit-sum-of-an-array](../../submissions/2535-difference-between-element-sum-and-digit-sum-of-an-array/)

## Model Solution

```python
class Solution:
    def differenceOfSum(self, nums: List[int]) -> int:
        element_sum = sum(nums)
        digit_sum = 0

        for num in nums:
            for digit in str(num):
                digit_sum += int(digit)

        return abs(element_sum - digit_sum)
```

## Why This Is The Model

The element sum and digit sum are two separate totals. Keeping the digit total as
a running value avoids storing every digit while still making the decimal
expansion explicit.

## Invariant

After processing any prefix of `nums`, `digit_sum` equals the sum of every digit
from the processed numbers.

## Complexity

- Time: O(d), where `d` is the total number of digits
- Space: O(1) extra, aside from each temporary string conversion

## Review Prompt

Why is it enough to maintain a running digit sum instead of building a list of
all digits first?
