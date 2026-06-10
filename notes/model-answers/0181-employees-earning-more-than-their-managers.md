# Employees Earning More Than Their Managers

- Pattern: self join / relational comparison
- Original attempt: [submissions/0181-employees-earning-more-than-their-managers](../../submissions/0181-employees-earning-more-than-their-managers/)

## Model Solution

```python
import pandas as pd


def find_employees(employee: pd.DataFrame) -> pd.DataFrame:
    managers = employee[["id", "salary"]].rename(
        columns={"id": "managerId", "salary": "managerSalary"}
    )
    joined = employee.merge(managers, on="managerId")
    richer = joined[joined["salary"] > joined["managerSalary"]]

    return richer[["name"]].rename(columns={"name": "Employee"})
```

## Why This Is The Model

The relationship is inside the same table: each employee points to a manager by
`managerId`. The model answer makes a small manager lookup table, joins it back
onto employees, and then filters rows where the employee salary is larger.

## Invariant

After the join, each remaining row has one employee salary and that employee's
manager salary. The final filter keeps exactly the employees earning more than
their managers.

## Complexity

- Time: O(n) expected for the join and filter
- Space: O(n)

## Review Prompt

Why do employees with no manager disappear from the result before the salary
comparison?
