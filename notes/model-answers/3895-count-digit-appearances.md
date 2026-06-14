# Count Digit Appearances

- Pattern: digit scan per number
- Original attempt: [submissions/3895-count-digit-appearances](../../submissions/3895-count-digit-appearances/)

## Model Solution

```python
class Solution:
    def countDigitOccurrences(self, nums: list[int], d: int) -> int:
        res = 0
        for n in nums:
            while n:
                if n%10==d:
                    res += 1
                n//=10
        return res
```

## Why This Is The Model

The accepted solution checks each digit exactly once and keeps only a running count.

## Invariant or Proof Idea

After each division step, all removed low-order digits have been tested against `d` exactly once.

## Complexity

- Time: O(total digits)
- Space: O(1)

## Review Prompt

How would you adjust the loop if `0` itself had to count as one zero digit?
