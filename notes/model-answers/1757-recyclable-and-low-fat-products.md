# Recyclable And Low Fat Products

- Pattern: boolean filter
- Original attempt: [submissions/1757-recyclable-and-low-fat-products](../../submissions/1757-recyclable-and-low-fat-products/)

## Model Solution

```python
import pandas as pd


def find_products(products: pd.DataFrame) -> pd.DataFrame:
    mask = (products["low_fats"] == "Y") & (products["recyclable"] == "Y")
    return products.loc[mask, ["product_id"]]
```

## Why This Is The Model

The required condition is the conjunction of two independent flags. A vectorized
boolean mask states both checks directly and projects only the product id.

## Invariant

Every returned product has both flags set to `Y`; any product missing either flag
is excluded.

## Complexity

- Time: O(n)
- Space: O(n) for the mask and result

## Review Prompt

Why is this an `and` condition rather than an `or` condition?
