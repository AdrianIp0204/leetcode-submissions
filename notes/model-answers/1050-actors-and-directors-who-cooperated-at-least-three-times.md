# Actors and Directors Who Cooperated At Least Three Times

- Pattern: group by aggregate / filter
- Original attempt: [submissions/1050-actors-and-directors-who-cooperated-at-least-three-times](../../submissions/1050-actors-and-directors-who-cooperated-at-least-three-times/)

## Model Solution

```python
import pandas as pd


def actors_and_directors(actor_director: pd.DataFrame) -> pd.DataFrame:
    counts = (
        actor_director
        .groupby(["actor_id", "director_id"])
        .size()
        .reset_index(name="count")
    )

    return counts.loc[counts["count"] >= 3, ["actor_id", "director_id"]]
```

## Why This Is The Model

The accepted attempt groups by actor/director and filters groups whose count is
at least three. The model answer uses `.size()` to name the aggregate directly,
which makes it clear that the row count, not a specific column value, is the
quantity being tested.

## Invariant

After grouping, each output candidate row represents one distinct
`(actor_id, director_id)` pair and its total number of rows in the source table.
The final filter keeps only pairs with count at least three.

## Complexity

- Time: O(n) expected for grouping
- Space: O(k), where `k` is the number of distinct actor/director pairs

## Review Prompt

Why is counting rows in each group more direct than counting one chosen column?
