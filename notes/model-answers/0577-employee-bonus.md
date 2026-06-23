# Employee Bonus

- Pattern: left join / nullable filter
- Original attempt: [submissions/0577-employee-bonus](../../submissions/0577-employee-bonus/)

## Model Solution

```python
import pandas as pd


def employee_bonus(employee: pd.DataFrame, bonus: pd.DataFrame) -> pd.DataFrame:
    joined = employee.merge(bonus, on="empId", how="left")
    eligible = joined[(joined["bonus"].isna()) | (joined["bonus"] < 1000)]
    return eligible[["name", "bonus"]]
```

## Why This Is The Model

Every employee must be considered, including employees without a bonus row. A
left join keeps the employee table as the driver, then the filter keeps rows
whose bonus is missing or below the threshold.

## Invariant

After the join, each employee row has either its matching bonus or a null bonus.
The final filter keeps exactly the rows where the bonus condition is satisfied.

## Complexity

- Time: O(e + b) expected for the join and filter
- Space: O(e + b)

## Review Prompt

Why would an inner join lose employees who have no bonus record?
