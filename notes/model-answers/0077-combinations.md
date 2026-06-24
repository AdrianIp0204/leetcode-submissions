# Combinations

- Pattern: library combinations / backtracking model
- Original attempt: [submissions/0077-combinations](../../submissions/0077-combinations/)

## Model Solution

```python
from itertools import combinations


class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        return list(combinations(range(1, n + 1), k))
```

## Why This Is The Model

The accepted solution delegates the enumeration to `itertools.combinations`,
which produces each size-`k` subset from the increasing range exactly once. The
important idea is that combination order is canonical, so no duplicate handling
or permutation filtering is needed.

## Invariant

Every emitted tuple is strictly increasing and has length `k`, which means it
represents one unique combination from `1..n`.

## Complexity

- Time: O(C(n, k) * k)
- Space: O(C(n, k) * k) for the returned list

## Review Prompt

Why does keeping the values in increasing order avoid duplicate combinations?
