# Reshape Data Concatenate

- Pattern: dataframe concatenation
- Original attempt: [submissions/2888-reshape-data-concatenate](../../submissions/2888-reshape-data-concatenate/)

## Model Solution

```python
import pandas as pd


def concatenateTables(df1: pd.DataFrame, df2: pd.DataFrame) -> pd.DataFrame:
    return pd.concat([df1, df2])
```

## Why This Is The Model

The accepted code stacks the rows from the second dataframe after the rows from
the first dataframe. `pd.concat` is the direct dataframe operation for that
vertical combination.

## Invariant

All rows from both input dataframes appear in the result, with `df1` rows before
`df2` rows.

## Complexity

- Time: O(n + m)
- Space: O(n + m)

## Review Prompt

Why is concatenation different from merging on a key?
