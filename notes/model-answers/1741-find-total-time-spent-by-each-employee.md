# Find Total Time Spent By Each Employee

- Pattern: derived duration then group sum
- Original attempt: [submissions/1741-find-total-time-spent-by-each-employee](../../submissions/1741-find-total-time-spent-by-each-employee/)

## Model Solution

```python
import pandas as pd


def total_time(employees: pd.DataFrame) -> pd.DataFrame:
    employees = employees.assign(duration=employees["out_time"] - employees["in_time"])
    totals = employees.groupby(["event_day", "emp_id"], as_index=False)["duration"].sum()
    return totals.rename(columns={"event_day": "day", "duration": "total_time"})
```

## Why This Is The Model

Each row contributes one interval length. Computing that duration first turns the
problem into a straightforward grouped sum by day and employee.

## Invariant

For each `(event_day, emp_id)` group, the output sum equals the total of all
`out_time - in_time` intervals in that group.

## Complexity

- Time: O(n) expected for the grouped sum
- Space: O(n)

## Review Prompt

Why should the duration be computed before grouping?
