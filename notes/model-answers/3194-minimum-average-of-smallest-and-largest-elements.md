# Minimum Average of Smallest and Largest Elements

- Pattern: paired extremes
- Original attempt: [submissions/3194-minimum-average-of-smallest-and-largest-elements](../../submissions/3194-minimum-average-of-smallest-and-largest-elements/)

## Model Solution

```python
import heapq
class Solution:
    def minimumAverage(self, nums: List[int]) -> float:
        l = len(nums)//2
        MAX = [-i for i in nums]
        heapq.heapify(nums)
        heapq.heapify(MAX)
        res = []
        for _ in range(l):
            res.append((heapq.heappop(nums)-heapq.heappop(MAX))/2)
        return min(res)
```

## Why This Is The Model

The accepted solution uses a min-heap and a max-heap via negation to repeatedly take the two extremes.

## Invariant or Proof Idea

Each loop removes one smallest remaining value and one largest remaining value, so every computed average matches the required operation order.

## Complexity

- Time: O(n log n) for the heap approach
- Space: O(n)

## Review Prompt

How would sorting first reduce the implementation complexity?
