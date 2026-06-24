# Drop Duplicate Rows

- Pattern: duplicate removal by key
- Original attempt: [submissions/2882-drop-duplicate-rows](../../submissions/2882-drop-duplicate-rows/)

## Model Solution

```python
import pandas as pd


def dropDuplicateEmails(customers: pd.DataFrame) -> pd.DataFrame:
    return customers.drop_duplicates(subset=["email"])
```

## Why This Is The Model

Only the email column defines duplication. `drop_duplicates` keeps the first row
for each email and leaves non-duplicate rows unchanged.

## Invariant

In the returned frame, each email appears at most once.

## Complexity

- Time: O(n) expected
- Space: O(n)

## Review Prompt

Why should the duplicate check use only `email` instead of every column?
