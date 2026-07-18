# Product Sales Analysis I

- Pattern: join / select columns
- Original attempt: [submissions/1068-product-sales-analysis-i](../../submissions/1068-product-sales-analysis-i/)

## Model Solution

```python
import pandas as pd


def sales_analysis(sales: pd.DataFrame, product: pd.DataFrame) -> pd.DataFrame:
    return product.merge(sales, on="product_id")[["product_name", "year", "price"]]
```

## Why This Is The Model

The accepted code performs the required relational join first, then projects the
three output columns. Starting from `product` keeps the solution close to the
idea that product names come from the product table and sales facts come from
the sales table.

## Invariant

Every output row corresponds to one sales row whose `product_id` matched a
product row, with the product name copied from that matched product.

## Complexity

- Time: O(p + s) expected for the merge
- Space: O(p + s) for the joined frame

## Review Prompt

Why is a join on `product_id` needed before selecting `product_name`, `year`,
and `price`?
