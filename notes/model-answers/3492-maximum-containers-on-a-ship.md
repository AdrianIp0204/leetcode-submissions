# Maximum Containers on a Ship

- Pattern: capacity minimum
- Original attempt: [submissions/3492-maximum-containers-on-a-ship](../../submissions/3492-maximum-containers-on-a-ship/)

## Model Solution

```python
class Solution:
    def maxContainers(self, n: int, w: int, maxWeight: int) -> int:
        slots = n * n
        weight_capacity = maxWeight // w
        return min(slots, weight_capacity)
```

## Why This Is The Model

The answer is limited by two independent capacities: the number of grid slots and
the number of containers the weight limit can support. The maximum loadable count
is the smaller of those two limits.

## Invariant

Any feasible answer must be at most `slots` and at most `maxWeight // w`; choosing
their minimum satisfies both constraints and cannot be improved.

## Complexity

- Time: O(1)
- Space: O(1)

## Review Prompt

Why does `maxWeight // w` already handle the case where even one container is too
heavy?
