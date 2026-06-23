# Sales Analysis III

- Pattern: group-level date filter
- Original attempt: [submissions/1084-sales-analysis-iii](../../submissions/1084-sales-analysis-iii/)

## Model Solution

```python
import pandas as pd


def sales_analysis(product: pd.DataFrame, sales: pd.DataFrame) -> pd.DataFrame:
    in_window = sales["sale_date"].between("2019-01-01", "2019-03-31")
    valid_ids = sales.groupby("product_id").filter(lambda rows: in_window.loc[rows.index].all())
    return (
        valid_ids[["product_id"]]
        .drop_duplicates()
        .merge(product, on="product_id")[["product_id", "product_name"]]
    )
```

## Why This Is The Model

The date rule applies to all sales for a product, not to individual sale rows in
isolation. The model keeps product groups only when every sale for that product
falls inside the target window, then joins product names.

## Invariant

A product survives the group filter only if no sale row for that product is
outside the accepted date range.

## Complexity

- Time: O(s + p) expected for grouping and the join
- Space: O(s + p)

## Review Prompt

Why is filtering sale rows first not enough for this problem?
