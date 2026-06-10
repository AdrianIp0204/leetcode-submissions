# Left and Right Sum Differences

- Pattern: rolling prefix and suffix sums
- Original attempt: [submissions/2574-left-and-right-sum-differences](../../submissions/2574-left-and-right-sum-differences/)

## Model Solution

```python
class Solution:
    def leftRightDifference(self, nums: List[int]) -> List[int]:
        left_sum = 0
        right_sum = sum(nums)
        answer = []

        for num in nums:
            right_sum -= num
            answer.append(abs(left_sum - right_sum))
            left_sum += num

        return answer
```

## Why This Is The Model

Each index belongs to neither side of its own split. Removing the current value
from `right_sum` before comparing makes the two rolling sums match the problem's
definition without building prefix and suffix arrays.

## Invariant

At the moment the difference is appended for `num`, `left_sum` contains the sum
before the current index and `right_sum` contains the sum after it.

## Complexity

- Time: O(n)
- Space: O(n) for the returned list

## Review Prompt

Why must the current number be subtracted from `right_sum` before computing the
difference?
