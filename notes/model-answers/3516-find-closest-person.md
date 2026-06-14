# Find Closest Person

- Pattern: distance comparison
- Original attempt: [submissions/3516-find-closest-person](../../submissions/3516-find-closest-person/)

## Model Solution

```python
class Solution:
    def findClosest(self, x: int, y: int, z: int) -> int:
        return 1 if abs(z-x) < abs(z-y) else 2 if abs(z-x) > abs(z-y) else 0
```

## Why This Is The Model

The accepted solution encodes the three cases directly in one expression.

## Invariant or Proof Idea

The smaller absolute distance identifies the person who reaches `z` first under equal speed.

## Complexity

- Time: O(1)
- Space: O(1)

## Review Prompt

Why is absolute value needed instead of a signed difference?
