# Number of 1 Bits

- Pattern: bit counting
- Original attempt: [submissions/0191-number-of-1-bits](../../submissions/0191-number-of-1-bits/)

## Model Solution

```python
class Solution:
    def hammingWeight(self, n: int) -> int:
        count = 0
        while n:
            count += n & 1
            n >>= 1
        return count
```

## Why This Is The Model

The submitted solution converts the number to binary and counts the `1`
characters. The loop above keeps the same idea in bit form: inspect the low bit,
then shift to the next bit.

## Invariant

After each iteration, `count` equals the number of set bits removed from the
original value, and `n` contains only the unprocessed higher bits.

## Complexity

- Time: O(b), where b is the number of bits in `n`
- Space: O(1)

## Review Prompt

Why does `n & 1` tell you whether the current lowest bit is set?

