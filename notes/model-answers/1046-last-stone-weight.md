# Last Stone Weight

- Pattern: max heap simulation
- Original attempt: [submissions/1046-last-stone-weight](../../submissions/1046-last-stone-weight/)

## Model Solution

```python
import heapq
class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        sl = [-i for i in stones]
        heapq.heapify(sl)
        while len(sl) > 1:
            heapq.heappush(sl, heapq.heappop(sl) - heapq.heappop(sl))
        return 0 if sl == [] else -sl[0]
```

## Why This Is The Model

The accepted solution always smashes the current two largest stones, exactly matching the process required by the problem.

## Invariant or Proof Idea

Before every smash, the heap contains the negative weights of all stones still in play.

## Complexity

- Time: O(n log n)
- Space: O(n)

## Review Prompt

Why do we store negative stone weights in `heapq`?
