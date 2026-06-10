# Running Sum of 1d Array

- Pattern: prefix sum
- Original attempt: [submissions/1480-running-sum-of-1d-array](../../submissions/1480-running-sum-of-1d-array/)

## Model Solution

```python
class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        total = 0
        answer = []

        for num in nums:
            total += num
            answer.append(total)

        return answer
```

## Why This Is The Model

The running total stores the sum of every value seen so far. Appending after the
addition records the prefix ending at the current element, which is exactly the
definition of the required output.

## Invariant

After processing `nums[i]`, `total` equals `sum(nums[:i + 1])`, and
`answer[i]` stores that same prefix sum.

## Complexity

- Time: O(n)
- Space: O(n) for the output

## Review Prompt

Why would appending `total` before adding the current number shift every answer
one position behind?
