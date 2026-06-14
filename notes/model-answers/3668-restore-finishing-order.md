# Restore Finishing Order

- Pattern: order filter / membership set
- Original attempt: [submissions/3668-restore-finishing-order](../../submissions/3668-restore-finishing-order/)

## Model Solution

```python
class Solution:
    def recoverOrder(self, order: List[int], friends: List[int]) -> List[int]:
        finished = set(friends)
        return [person for person in order if person in finished]
```

## Why This Is The Model

The `order` list already has the relative order the answer must preserve. A set
turns the finished-list membership check into constant-time lookup, so filtering
`order` directly is both clear and efficient.

## Invariant

After scanning any prefix of `order`, the result contains exactly the finished
people from that prefix, in the same relative order.

## Complexity

- Time: O(n + m)
- Space: O(m) for the membership set and O(k) for the output

## Review Prompt

Why would iterating over `friends` first produce the wrong order?
