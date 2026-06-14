# Maximum Total Subarray Value II

- Pattern: range max-min sparse table + best-first heap
- Original attempt: [submissions/3691-maximum-total-subarray-value-ii](../../submissions/3691-maximum-total-subarray-value-ii/)

## Model Solution

```python
from typing import List
from heapq import heappush, heappop

class SparseTable:
    def __init__(self, nums: List[int]):
        self.n = len(nums)
        self.LOG = self.n.bit_length()

        self.mx = [[0] * self.LOG for _ in range(self.n)]
        self.mn = [[0] * self.LOG for _ in range(self.n)]

        for i, x in enumerate(nums):
            self.mx[i][0] = x
            self.mn[i][0] = x

        j = 1
        while (1 << j) <= self.n:
            length = 1 << j
            half = length >> 1

            for i in range(self.n - length + 1):
                self.mx[i][j] = max(self.mx[i][j - 1], self.mx[i + half][j - 1])
                self.mn[i][j] = min(self.mn[i][j - 1], self.mn[i + half][j - 1])

            j += 1

        self.log = [0] * (self.n + 1)
        for i in range(2, self.n + 1):
            self.log[i] = self.log[i // 2] + 1

    def query_max(self, l: int, r: int) -> int:
        length = r - l + 1
        j = self.log[length]
        size = 1 << j
        return max(
            self.mx[l][j],
            self.mx[r - size + 1][j]
        )

    def query_min(self, l: int, r: int) -> int:
        length = r - l + 1
        j = self.log[length]
        size = 1 << j
        return min(
            self.mn[l][j],
            self.mn[r - size + 1][j]
        )

class Solution:
    def maxTotalValue(self, nums: List[int], k: int) -> int:
        n = len(nums)
        st = SparseTable(nums)

        heap = []

        def value(l: int, r: int) -> int:
            return st.query_max(l, r) - st.query_min(l, r)

        for l in range(n):
            heappush(heap, (-value(l, n - 1), l, n - 1))

        ans = 0

        for _ in range(k):
            neg_val, l, r = heappop(heap)
            ans += -neg_val
            if r > l:
                heappush(heap, (-value(l, r - 1), l, r - 1))

        return ans
```

## Why This Is The Model

The accepted solution avoids enumerating all subarrays. Sparse-table queries make each candidate cheap, and the heap visits only the best `k` candidates needed for the total.

## Invariant or Proof Idea

For each left endpoint represented in the heap, the stored right endpoint is the best not-yet-popped candidate remaining in that endpoint's decreasing-right sequence.

## Complexity

- Time: O(n log n + k log n)
- Space: O(n log n)

## Review Prompt

Why does popping a range `(l, r)` lead to pushing `(l, r - 1)` as the next candidate for that same `l`?
