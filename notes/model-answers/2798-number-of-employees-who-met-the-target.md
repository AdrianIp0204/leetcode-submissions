# Number of Employees Who Met the Target

- Pattern: threshold count
- Original attempt: [submissions/2798-number-of-employees-who-met-the-target](../../submissions/2798-number-of-employees-who-met-the-target/)

## Model Solution

```python
class Solution:
    def numberOfEmployeesWhoMetTarget(self, hours: List[int], target: int) -> int:
        return sum(hour >= target for hour in hours)
```

## Why This Is The Model

The task asks for a count of independent values meeting a threshold. A direct
scan expresses that condition without sorting, extra lists, or early-break logic.

## Invariant

Each boolean produced by the generator contributes one exactly when the matching
employee's hours are at least `target`.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why does sorting add unnecessary work for a simple threshold count?
