# Second Highest Salary

- Pattern: pandas distinct values / ordering
- Original attempt: [submissions/0176-second-highest-salary](../../submissions/0176-second-highest-salary/)

## Model Solution

```python
import pandas as pd


def second_highest_salary(employee: pd.DataFrame) -> pd.DataFrame:
    salaries = employee[["salary"]].drop_duplicates().sort_values("salary", ascending=False)

    value = None if len(salaries) < 2 else salaries.iloc[1]["salary"]
    return pd.DataFrame({"SecondHighestSalary": [value]})
```

## Why This Is The Model

The answer depends on distinct salary values, not employee rows. Sorting those
unique salaries descending makes the second row the second highest salary, and
the missing case returns the required single null value.

## Invariant

After dropping duplicates and sorting descending, every salary appears once and
all earlier rows are greater than later rows.

## Complexity

- Time: O(n log n)
- Space: O(n)

## Review Prompt

Why must duplicate highest salaries be removed before selecting the second row?
