# Plus One

- Pattern: carry propagation
- Original attempt: [submissions/0066-plus-one](../../submissions/0066-plus-one/)

## Model Solution

```python
class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        for i in range(len(digits) - 1, -1, -1):
            if digits[i] < 9:
                digits[i] += 1
                return digits
            digits[i] = 0

        return [1] + digits
```

## Why This Is The Model

The accepted attempt handles the carry correctly but pops digits into a reversed
result and then reverses again. The model answer mutates the digit array from
right to left. As soon as a digit is not `9`, the carry is resolved and the
answer can return immediately.

## Invariant

All positions to the right of `i` have already been processed. If they were all
`9`, they have become `0` because the carry continues left.

## Complexity

- Time: O(n)
- Space: O(1), except for the new leading digit in the all-nines case

## Review Prompt

Why does the loop only need to continue while it keeps seeing `9`?
