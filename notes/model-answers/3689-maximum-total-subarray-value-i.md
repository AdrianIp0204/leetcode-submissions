# Maximum Total Subarray Value I

- Pattern: global spread times independent choices
- Original attempt: [submissions/3689-maximum-total-subarray-value-i](../../submissions/3689-maximum-total-subarray-value-i/)

## Model Solution

```python
class Solution:
    def maxTotalValue(self, nums: List[int], k: int) -> int:
        return (max(nums) - min(nums)) * k
```

## Why This Is The Model

The best value any chosen subarray can contribute is the largest possible spread
between a maximum and a minimum, which is the global maximum minus the global
minimum. Since the `k` choices are independent under this version's rules, the
best single value can be reused `k` times.

## Invariant

No subarray value can exceed `max(nums) - min(nums)`, and that value is available
from a subarray spanning a global minimum and a global maximum.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why is it valid to multiply the best one-subarray value by `k`?
