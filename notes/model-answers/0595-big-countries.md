# Big Countries

- Pattern: database filter
- Original attempt: [submissions/0595-big-countries](../../submissions/0595-big-countries/)

## Model Solution

```python
import pandas as pd


def big_countries(world: pd.DataFrame) -> pd.DataFrame:
    mask = (world["area"] >= 3000000) | (world["population"] >= 25000000)
    return world.loc[mask, ["name", "population", "area"]]
```

## Why This Is The Model

The query is a direct filter with two independent ways for a country to qualify.
Building the boolean mask makes the OR condition explicit, then the projection
returns exactly the requested columns.

## Invariant

Every returned row satisfies at least one size condition, and every row that
satisfies either condition is included.

## Complexity

- Time: O(n)
- Space: O(n) for the mask and result

## Review Prompt

Why is this an `or` condition rather than an `and` condition?
