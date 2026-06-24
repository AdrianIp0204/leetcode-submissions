# Create a DataFrame from List

- Pattern: DataFrame construction with explicit schema
- Original attempt: [submissions/2877-create-a-dataframe-from-list](../../submissions/2877-create-a-dataframe-from-list/)

## Model Solution

```python
from typing import List

import pandas as pd


def createDataframe(student_data: List[List[int]]) -> pd.DataFrame:
    return pd.DataFrame(student_data, columns=["student_id", "age"])
```

## Why This Is The Model

The input rows already have the target values in order. The model answer creates
the dataframe in one step and supplies the required column names explicitly, so
there is no follow-up rename or index manipulation.

## Invariant

Each input row becomes one output row in the same order, with the first value in
`student_id` and the second value in `age`.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

What bug would appear if the dataframe were created without the explicit column
names?
