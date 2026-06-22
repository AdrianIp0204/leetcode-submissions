# Find Minimum Operations to Make All Elements Divisible by Three

- Pattern: count independent fixes
- Original attempt: [submissions/3190-find-minimum-operations-to-make-all-elements-divisible-by-three](../../submissions/3190-find-minimum-operations-to-make-all-elements-divisible-by-three/)

## Model Solution

```python
class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        return sum(1 for num in nums if num % 3 != 0)
```

## Why This Is The Model

The submitted solution observes that each number is independent. A number
already divisible by three needs no operation; every other remainder can be fixed
with one operation, so the answer is just a count.

## Invariant

After scanning any prefix, the count equals the number of prefix elements whose
remainder modulo three is non-zero.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why does every non-divisible element contribute exactly one operation?
