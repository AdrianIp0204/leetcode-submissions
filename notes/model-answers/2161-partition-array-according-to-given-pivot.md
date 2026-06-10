# Partition Array According to Given Pivot

- Pattern: stable three-way partition
- Original attempt: [submissions/2161-partition-array-according-to-given-pivot](../../submissions/2161-partition-array-according-to-given-pivot/)

## Model Solution

```python
class Solution:
    def pivotArray(self, nums: List[int], pivot: int) -> List[int]:
        less = []
        equal = []
        greater = []

        for num in nums:
            if num < pivot:
                less.append(num)
            elif num == pivot:
                equal.append(num)
            else:
                greater.append(num)

        return less + equal + greater
```

## Why This Is The Model

The problem asks for a partition that preserves the original relative order
inside each group. Scanning once from left to right and appending each value to
one of three buckets gives that stability naturally. Concatenating the buckets
then produces the required order: smaller values, pivot values, larger values.

## Invariant

After processing any prefix of `nums`, each bucket contains exactly the values
from that prefix that belong to its comparison group, in their original order.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why would an in-place two-pointer partition usually fail this problem's
relative-order requirement?
