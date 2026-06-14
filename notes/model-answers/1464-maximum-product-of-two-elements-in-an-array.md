# Maximum Product of Two Elements in an Array

- Pattern: top two scan
- Original attempt: [submissions/1464-maximum-product-of-two-elements-in-an-array](../../submissions/1464-maximum-product-of-two-elements-in-an-array/)

## Model Solution

```python
class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        largest = second_largest = 0

        for num in nums:
            if num > largest:
                second_largest = largest
                largest = num
            elif num > second_largest:
                second_largest = num

        return (largest - 1) * (second_largest - 1)
```

## Why This Is The Model

Only the two largest values can maximize the product because every value is
positive and subtracting one preserves their ordering. A single scan finds those
two values without sorting or mutating the input.

## Invariant

After each number is processed, `largest` and `second_largest` are the two
largest values seen so far.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why is it valid to choose the two largest numbers before subtracting `1` from
each?
