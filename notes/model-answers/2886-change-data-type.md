# Change Data Type

- Pattern: column type conversion
- Original attempt: [submissions/2886-change-data-type](../../submissions/2886-change-data-type/)

## Model Solution

```python
import pandas as pd


def changeDatatype(students: pd.DataFrame) -> pd.DataFrame:
    students["grade"] = students["grade"].astype(int)
    return students
```

## Why This Is The Model

The data shape does not change; only the `grade` column's dtype changes. A direct
`astype(int)` conversion is the narrowest operation that performs that update.

## Invariant

Rows and columns are preserved, and the `grade` values are represented as
integers in the result.

## Complexity

- Time: O(n)
- Space: O(n) for the converted column storage

## Review Prompt

Which part of the dataframe should change: values, rows, columns, or dtype?
