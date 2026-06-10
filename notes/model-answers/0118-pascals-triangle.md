# Pascal's Triangle

- Pattern: dynamic row construction
- Original attempt: [submissions/0118-pascals-triangle](../../submissions/0118-pascals-triangle/)

## Model Solution

```python
class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        triangle = []

        for row_index in range(numRows):
            row = [1] * (row_index + 1)

            for j in range(1, row_index):
                row[j] = triangle[-1][j - 1] + triangle[-1][j]

            triangle.append(row)

        return triangle
```

## Why This Is The Model

The accepted attempt uses binomial coefficients, which is mathematically direct
but depends on `comb` and does not teach the local recurrence. Pascal's triangle
is usually generated from the previous row: edges are `1`, and each interior
entry is the sum of the two values above it.

## Invariant

When building row `i`, all earlier rows are already correct. Each interior
position `j` uses exactly the two parent values from row `i - 1`.

## Complexity

- Time: O(numRows^2)
- Space: O(numRows^2) for the returned triangle

## Review Prompt

Why do the edge values not need to be calculated from the previous row?
