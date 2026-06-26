# Kth Largest Element in an Array

- Pattern: min-heap of size `k`
- Original attempt: [submissions/0215-kth-largest-element-in-an-array](../../submissions/0215-kth-largest-element-in-an-array/)

## Model Solution

```python
import heapq


class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        heap = []
        for num in nums:
            heapq.heappush(heap, num)
            if len(heap) > k:
                heapq.heappop(heap)
        return heap[0]
```

## Why This Is The Model

The accepted solution uses `heapq.nlargest`, which is concise and appropriate.
Writing the size-`k` heap explicitly makes the selection invariant visible: keep
only the best `k` values seen so far, and the smallest value in that heap is the
kth largest overall.

## Invariant

After each number, `heap` contains the largest `min(k, seen)` values from the
processed prefix. When all numbers have been processed, `heap[0]` is smaller
than or equal to the other kept values and larger than or equal to every
discarded value.

## Complexity

- Time: O(n log k)
- Space: O(k)

## Review Prompt

Why is the answer at `heap[0]` instead of the maximum element in the heap?
