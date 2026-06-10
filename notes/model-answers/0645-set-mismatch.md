# Set Mismatch

- Pattern: frequency map over expected range
- Original attempt: [submissions/0645-set-mismatch](../../submissions/0645-set-mismatch/)

## Model Solution

```python
class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        counts = [0] * (len(nums) + 1)

        for num in nums:
            counts[num] += 1

        duplicate = missing = 0
        for value in range(1, len(nums) + 1):
            if counts[value] == 2:
                duplicate = value
            elif counts[value] == 0:
                missing = value

        return [duplicate, missing]
```

## Why This Is The Model

The expected values are exactly `1..n`, so an indexed count array directly shows
which value appeared twice and which value never appeared. The final return keeps
the required order: duplicate first, missing second.

## Invariant

After counting, `counts[value]` is the number of times `value` appears in the
input for every expected value.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why does the count array need one extra slot instead of length `n`?
