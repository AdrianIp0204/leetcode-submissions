# Article Views I

- Pattern: self-action filter / distinct sort
- Original attempt: [submissions/1148-article-views-i](../../submissions/1148-article-views-i/)

## Model Solution

```python
import pandas as pd


def article_views(views: pd.DataFrame) -> pd.DataFrame:
    authors = views.loc[views["author_id"] == views["viewer_id"], ["author_id"]]
    return (
        authors.drop_duplicates()
        .rename(columns={"author_id": "id"})
        .sort_values("id")
    )
```

## Why This Is The Model

The condition is row-local: an author viewed their own article when the author
and viewer columns match. After filtering, duplicates are removed because one
author can match on multiple rows.

## Invariant

Every returned `id` came from at least one row where `author_id == viewer_id`,
and each `id` appears only once.

## Complexity

- Time: O(n log n) because of sorting
- Space: O(n)

## Review Prompt

Why is `drop_duplicates` needed before returning the author ids?
