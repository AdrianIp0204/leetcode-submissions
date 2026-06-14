# Subtract the Product and Sum of Digits of an Integer

- Pattern: digit extraction / accumulator initialization
- Original attempt: [submissions/1281-subtract-the-product-and-sum-of-digits-of-an-integer](../../submissions/1281-subtract-the-product-and-sum-of-digits-of-an-integer/)

## Model Solution

```cpp
class Solution {
public:
    int subtractProductAndSum(int n) {
        int product = 1;
        int sum = 0;

        while (n > 0) {
            int digit = n % 10;
            product *= digit;
            sum += digit;
            n /= 10;
        }

        return product - sum;
    }
};
```

## Why This Is The Model

The number is processed one digit at a time with `% 10` and `/ 10`, avoiding any
need to allocate a string. The two accumulators start from their identity values:
`1` for multiplication and `0` for addition.

## Invariant

After each loop iteration, `product` and `sum` describe exactly the digits that
have already been removed from the right side of `n`.

## Complexity

- Time: O(d), where `d` is the number of digits
- Space: O(1)

## Review Prompt

Why does the digit product have to start at `1` instead of `0`?
