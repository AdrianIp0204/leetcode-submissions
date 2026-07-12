# Product Sales Analysis III

- Pattern: group by minimum value, then join back
- Original attempt: [submissions/1070-product-sales-analysis-iii](../../submissions/1070-product-sales-analysis-iii/)

## Model Solution

```python
import pandas as pd


def sales_analysis(sales: pd.DataFrame) -> pd.DataFrame:
    first_years = sales.groupby("product_id", as_index=False)["year"].min()
    first_year_sales = first_years.merge(sales, on=["product_id", "year"])
    return first_year_sales.rename(columns={"year": "first_year"})[
        ["product_id", "first_year", "quantity", "price"]
    ]
```

## Why This Is The Model

The earliest year is a per-product aggregate, but the answer also needs row
attributes from the original sales table. Computing the minimum year first and
joining back on both `product_id` and `year` keeps every row from that earliest
year, including ties.

## Invariant

Every output row has `first_year` equal to the minimum sale year for its
`product_id`, and no row from a later year is included.

## Complexity

- Time: O(n) expected for grouping and merge
- Space: O(n)

## Review Prompt

Why is joining back on both `product_id` and `year` needed after finding the
minimum year?
