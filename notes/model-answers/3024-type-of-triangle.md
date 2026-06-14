# Type of Triangle

- Pattern: triangle inequality and equality classification
- Original attempt: [submissions/3024-type-of-triangle](../../submissions/3024-type-of-triangle/)

## Model Solution

```python
class Solution:
    def triangleType(self, nums: List[int]) -> str:
        nums.sort()
        a, b, c = nums

        if a + b <= c:
            return "none"
        if a == c:
            return "equilateral"
        if a == b or b == c:
            return "isosceles"
        return "scalene"
```

## Why This Is The Model

Sorting reduces the triangle inequality check to the only possible failing case:
the two smallest sides must sum to more than the largest side. Once the sides
form a valid triangle, equality patterns cleanly determine the type.

## Invariant

After sorting, `a <= b <= c`; therefore, if `a + b > c`, the other two triangle
inequalities must also hold.

## Complexity

- Time: O(1)
- Space: O(1)

## Review Prompt

Why should invalid side lengths be rejected before returning an equality-based
triangle type?
