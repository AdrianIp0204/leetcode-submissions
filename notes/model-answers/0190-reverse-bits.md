# Reverse Bits

- Pattern: fixed-width bit formatting
- Original attempt: [submissions/0190-reverse-bits](../../submissions/0190-reverse-bits/)

## Model Solution

```python
class Solution:
    def reverseBits(self, n: int) -> int:
        return int(f"{n:032b}"[::-1], 2)
```

## Why This Is The Model

The accepted model is concise and makes the 32-bit boundary explicit, which is the main edge case in this problem.

## Invariant or Proof Idea

The character at bit position `i` in the formatted string becomes position `31 - i` after the reverse.

## Complexity

- Time: O(1), because the width is always 32
- Space: O(1)

## Review Prompt

What would go wrong if the binary string were not padded to 32 characters?
