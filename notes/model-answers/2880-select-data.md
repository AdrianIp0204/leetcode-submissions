# Select Data

- Pattern: row filter and column projection
- Original attempt: [submissions/2880-select-data](../../submissions/2880-select-data/)

## Model Solution

```python
import pandas as pd


def selectData(students: pd.DataFrame) -> pd.DataFrame:
    return students.loc[students["student_id"] == 101, ["name", "age"]]
```

## Why This Is The Model

The task is a single equality filter followed by a two-column projection. Keeping
those two operations together makes the expected output shape explicit.

## Invariant

Every returned row has `student_id == 101`, and the result contains only `name`
and `age`.

## Complexity

- Time: O(n)
- Space: O(n) for the filtered result

## Review Prompt

Which columns should be projected after the student id filter?
