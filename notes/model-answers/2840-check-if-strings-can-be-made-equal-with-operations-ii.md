# Check if Strings Can be Made Equal With Operations II

- Pattern: parity-position multiset comparison
- Original attempt: [submissions/2840-check-if-strings-can-be-made-equal-with-operations-ii](../../submissions/2840-check-if-strings-can-be-made-equal-with-operations-ii/)

## Model Solution

```python
class Solution:
    def checkStrings(self, s1: str, s2: str) -> bool:
        return (
            sorted(s1[::2]) == sorted(s2[::2])
            and sorted(s1[1::2]) == sorted(s2[1::2])
        )
```

## Why This Is The Model

The allowed operation swaps indices with the same parity, so characters can move
freely among even positions and freely among odd positions, but never between the
two groups. Matching the two parity multisets is therefore both necessary and
sufficient.

## Invariant

Every allowed operation preserves the multiset of characters at even indices and
the multiset of characters at odd indices.

## Complexity

- Time: O(n log n)
- Space: O(n)

## Review Prompt

Why would comparing only `sorted(s1)` and `sorted(s2)` accept strings that cannot
actually be transformed?
