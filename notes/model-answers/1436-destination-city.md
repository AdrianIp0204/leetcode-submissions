# Destination City

- Pattern: set difference
- Original attempt: [submissions/1436-destination-city](../../submissions/1436-destination-city/)

## Model Solution

```python
class Solution:
    def destCity(self, paths: List[List[str]]) -> str:
        A = set()
        B = set()
        for i in paths:
            A.add(i[0])
            B.add(i[1])
        return (B - (A&B)).pop()
```

## Why This Is The Model

The accepted solution collects starts and ends, then subtracts starts from ends to isolate the terminal city.

## Invariant or Proof Idea

Every non-terminal destination also appears in the origin set for its outgoing path; only the final city does not.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why is `destinations - origins` enough to find the answer?
