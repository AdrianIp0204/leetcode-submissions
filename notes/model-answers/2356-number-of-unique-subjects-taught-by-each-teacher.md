# Number Of Unique Subjects Taught By Each Teacher

- Pattern: grouped distinct count
- Original attempt: [submissions/2356-number-of-unique-subjects-taught-by-each-teacher](../../submissions/2356-number-of-unique-subjects-taught-by-each-teacher/)

## Model Solution

```python
import pandas as pd


def count_unique_subjects(teacher: pd.DataFrame) -> pd.DataFrame:
    counts = teacher.groupby("teacher_id", as_index=False)["subject_id"].nunique()
    return counts.rename(columns={"subject_id": "cnt"})
```

## Why This Is The Model

The same teacher can appear multiple times for the same subject, so the count
must be distinct within each teacher group. `nunique` captures that requirement
directly.

## Invariant

For each teacher, `cnt` equals the number of different subject ids appearing in
that teacher's rows.

## Complexity

- Time: O(n) expected for grouped distinct counting
- Space: O(n)

## Review Prompt

Why is counting rows not the same as counting subjects here?
