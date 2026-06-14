# Single Number

- Pattern: bit manipulation / XOR cancellation
- Original attempt: [submissions/0136-single-number](../../submissions/0136-single-number/)

## Model Solution

```python
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        result = 0

        for num in nums:
            result ^= num

        return result
```

## Why This Is The Model

This is already the intended answer. XOR cancels pairs because `a ^ a = 0`, and
the remaining unpaired value survives because `0 ^ x = x`.

## Invariant

After each loop, `result` is the XOR of all values processed so far.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why would this fail if every repeated number appeared three times instead of
two?
