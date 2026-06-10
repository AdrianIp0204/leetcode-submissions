# Sign of the Product of an Array

- Pattern: product sign by negative parity
- Original attempt: [submissions/1822-sign-of-the-product-of-an-array](../../submissions/1822-sign-of-the-product-of-an-array/)

## Model Solution

```python
class Solution:
    def arraySign(self, nums: List[int]) -> int:
        negative_count = 0

        for num in nums:
            if num == 0:
                return 0
            if num < 0:
                negative_count += 1

        return -1 if negative_count % 2 else 1
```

## Why This Is The Model

Only two facts determine the product sign: whether any value is zero, and
whether the count of negative numbers is odd. Counting negatives avoids building
the actual product while preserving exactly the information needed.

## Invariant

After each nonzero number is processed, `negative_count` equals the number of
negative values seen so far.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why does an even number of negative factors make the final product positive?
