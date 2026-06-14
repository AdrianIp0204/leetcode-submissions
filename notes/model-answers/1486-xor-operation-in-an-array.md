# XOR Operation in an Array

- Pattern: iterative XOR accumulation
- Original attempt: [submissions/1486-xor-operation-in-an-array](../../submissions/1486-xor-operation-in-an-array/)

## Model Solution

```python
class Solution:
    def xorOperation(self, n: int, start: int) -> int:
        result = 0

        for i in range(n):
            result ^= start + 2 * i

        return result
```

## Why This Is The Model

The loop generates the sequence term for each index directly from the formula
`start + 2 * i`. XOR is associative, so one accumulator is enough and no array
of intermediate values is needed.

## Invariant

After index `i` is processed, `result` equals the XOR of all generated terms
from index `0` through `i`.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

What term is missed if the loop starts at `1` instead of `0`?
