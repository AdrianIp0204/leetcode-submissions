# The Latest Login In 2020

- Pattern: date-range filter then grouped max
- Original attempt: [submissions/1890-the-latest-login-in-2020](../../submissions/1890-the-latest-login-in-2020/)

## Model Solution

```python
import pandas as pd


def latest_login(logins: pd.DataFrame) -> pd.DataFrame:
    in_2020 = logins["time_stamp"].between("2020-01-01", "2020-12-31 23:59:59")
    latest = logins.loc[in_2020].groupby("user_id", as_index=False)["time_stamp"].max()
    return latest.rename(columns={"time_stamp": "last_stamp"})
```

## Why This Is The Model

The year filter removes irrelevant login rows before the maximum is computed.
Grouping by user then returns the latest remaining timestamp for each user.

## Invariant

After filtering, every candidate timestamp is in 2020, so the grouped maximum is
the latest 2020 login for that user.

## Complexity

- Time: O(n) expected for filtering and grouping
- Space: O(n)

## Review Prompt

Why should users with no 2020 login disappear from the result?
