# Sum Of Two Integers

- Pattern: bit manipulation / carry propagation
- Original attempt: [submissions/0371-sum-of-two-integers](../../submissions/0371-sum-of-two-integers/)

## Model Solution

```python
class Solution:
    def getSum(self, a: int, b: int) -> int:
        mask = 0xFFFFFFFF
        max_int = 0x7FFFFFFF

        while b != 0:
            carry = (a & b) << 1
            a = (a ^ b) & mask
            b = carry & mask

        return a if a <= max_int else ~(a ^ mask)
```

## Why This Is The Model

XOR adds bits without carrying, while AND identifies positions that need a carry
to the next bit. The mask keeps Python's unbounded integers behaving like a
32-bit two's-complement register.

## Invariant

At each loop, `a` stores the partial sum without unresolved carries, and `b`
stores the carries still waiting to be added.

## Complexity

- Time: O(1), bounded by 32 carry-propagation steps
- Space: O(1)

## Review Prompt

Why does Python need the explicit `0xFFFFFFFF` mask here?
