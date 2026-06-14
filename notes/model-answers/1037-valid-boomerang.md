# Valid Boomerang

- Pattern: geometry / cross product
- Original attempt: [submissions/1037-valid-boomerang](../../submissions/1037-valid-boomerang/)

## Model Solution

```python
class Solution:
    def isBoomerang(self, p: List[List[int]]) -> bool:
        return (p[0][0] - p[1][0]) * (p[0][1] - p[2][1]) != (p[0][0] - p[2][0]) * (p[0][1] - p[1][1])
```

## Why This Is The Model

The accepted solution tests the determinant directly, which is the stable model for three-point collinearity.

## Invariant or Proof Idea

The determinant is zero exactly when the vectors from one point to the other two lie on the same line.

## Complexity

- Time: O(1)
- Space: O(1)

## Review Prompt

Why is cross multiplication safer than comparing decimal slopes?
