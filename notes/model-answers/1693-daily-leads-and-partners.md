# Daily Leads And Partners

- Pattern: grouped distinct counts
- Original attempt: [submissions/1693-daily-leads-and-partners](../../submissions/1693-daily-leads-and-partners/)

## Model Solution

```python
import pandas as pd


def daily_leads_and_partners(daily_sales: pd.DataFrame) -> pd.DataFrame:
    return (
        daily_sales.groupby(["date_id", "make_name"], as_index=False)
        .agg(unique_leads=("lead_id", "nunique"), unique_partners=("partner_id", "nunique"))
    )
```

## Why This Is The Model

Both requested values are distinct counts within the same `(date_id, make_name)`
group. A single grouped aggregation computes both counts without extra joins or
manual de-duplication tables.

## Invariant

Within each output row, `unique_leads` and `unique_partners` count distinct ids
only inside that row's date and make group.

## Complexity

- Time: O(n) expected for hashing within groups
- Space: O(n)

## Review Prompt

Which two columns define the group before the distinct counts are computed?
