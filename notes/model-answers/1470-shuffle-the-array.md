# Shuffle the Array

- Pattern: two-half interleaving
- Original attempt: [submissions/1470-shuffle-the-array](../../submissions/1470-shuffle-the-array/)

## Model Solution

```python
class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        answer = []

        for i in range(n):
            answer.append(nums[i])
            answer.append(nums[i + n])

        return answer
```

## Why This Is The Model

The first half contains the `x` values and the second half contains the matching
`y` values. Appending `nums[i]` and `nums[i + n]` together makes the required
pairing explicit.

## Invariant

After processing index `i`, `answer` contains the correctly interleaved pairs
from `0` through `i`.

## Complexity

- Time: O(n)
- Space: O(n) for the output

## Review Prompt

Why is the matching `y` value at `i + n` instead of at the next index?
