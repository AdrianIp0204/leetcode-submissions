# Swap Sex Of Employees

- Pattern: conditional column transform
- Original attempt: [submissions/0627-swap-sex-of-employees](../../submissions/0627-swap-sex-of-employees/)

## Model Solution

```python
import pandas as pd


def swap_salary(salary: pd.DataFrame) -> pd.DataFrame:
    salary["sex"] = salary["sex"].map({"m": "f", "f": "m"})
    return salary
```

## Why This Is The Model

The operation is a direct two-value mapping on one column. Expressing it as a
mapping makes the intended replacement explicit and avoids row-by-row branching
logic.

## Invariant

Each row is preserved, and only the `sex` value is changed: `m` becomes `f`, and
`f` becomes `m`.

## Complexity

- Time: O(n)
- Space: O(1) extra aside from the updated column storage

## Review Prompt

Which columns should remain unchanged after the swap?
