# Find Occurrences of an Element in an Array

- Pattern: occurrence index precomputation
- Original attempt: [submissions/3159-find-occurrences-of-an-element-in-an-array](../../submissions/3159-find-occurrences-of-an-element-in-an-array/)

## Model Solution

```python
class Solution:
    def occurrencesOfElement(
        self, nums: list[int], queries: list[int], x: int
    ) -> list[int]:
        positions = [i for i, value in enumerate(nums) if value == x]
        answer = []

        for query in queries:
            if query <= len(positions):
                answer.append(positions[query - 1])
            else:
                answer.append(-1)

        return answer
```

## Why This Is The Model

The accepted solution first records every index where `x` appears, then answers
each query by direct lookup. That avoids rescanning `nums` for every query.

## Invariant

`positions[k]` is the array index of the `(k + 1)`-th occurrence of `x`, so a
1-indexed query `q` maps to `positions[q - 1]` when it exists.

## Complexity

- Time: O(n + q)
- Space: O(k + q), where k is the number of occurrences of `x`

## Review Prompt

Why does precomputing `positions` change repeated queries from scans into direct
lookups?

