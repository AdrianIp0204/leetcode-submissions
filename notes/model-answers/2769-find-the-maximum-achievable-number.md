# Find the Maximum Achievable Number

- Pattern: algebraic operation gap
- Original attempt: [submissions/2769-find-the-maximum-achievable-number](../../submissions/2769-find-the-maximum-achievable-number/)

## Model Solution

```python
class Solution:
    def theMaximumAchievableX(self, num: int, t: int) -> int:
        return num + 2 * t
```

## Why This Is The Model

One operation can effectively widen the reachable gap by two: move the starting
number down by one and the target number up by one. After `t` operations, the
largest reachable target is therefore `num + 2 * t`.

## Invariant

After `i` operations, no achievable value can be more than `num + 2 * i`.

## Complexity

- Time: O(1)
- Space: O(1)

## Review Prompt

Where does the factor of two come from in the reachable maximum?
