# Find Greatest Common Divisor of Array

- Pattern: min/max gcd
- Original attempt: [submissions/1979-find-greatest-common-divisor-of-array](../../submissions/1979-find-greatest-common-divisor-of-array/)

## Model Solution

```python
class Solution:
    def findGCD(self, nums: List[int]) -> int:
        MIN = min(nums)
        MAX = max(nums)
        for i in range(MIN, 0, -1):
            if MIN % i ==0 and MAX % i == 0:
                return i
```

## Why This Is The Model

The accepted solution extracts min and max and checks candidate divisors from largest to smallest, returning the first valid one.

## Invariant or Proof Idea

The first divisor found while scanning downward is the greatest common divisor because all larger candidates have already failed.

## Complexity

- Time: O(min(nums)) in the accepted scan
- Space: O(1)

## Review Prompt

Why do we only need `min(nums)` and `max(nums)`?
