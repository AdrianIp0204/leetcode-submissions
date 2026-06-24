# Project Employees I

- Pattern: join then group aggregate
- Original attempt: [submissions/1075-project-employees-i](../../submissions/1075-project-employees-i/)

## Model Solution

```python
import pandas as pd


def project_employees_i(project: pd.DataFrame, employee: pd.DataFrame) -> pd.DataFrame:
    joined = project.merge(employee, on="employee_id")
    averages = joined.groupby("project_id", as_index=False)["experience_years"].mean()
    return averages.rename(columns={"experience_years": "average_years"}).round(2)
```

## Why This Is The Model

The project table gives project membership, and the employee table gives each
employee's experience. Joining first attaches the numeric value to each project
assignment, then grouping by project computes the required average.

## Invariant

Each joined row represents one employee assigned to one project with that
employee's experience years attached.

## Complexity

- Time: O(p + e) expected for the join plus grouping
- Space: O(p + e)

## Review Prompt

Why does the grouping happen after the employee experience is joined in?
