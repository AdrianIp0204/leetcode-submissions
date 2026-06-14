# Transpose Matrix

- Pattern: matrix index swap
- Original attempt: [submissions/0867-transpose-matrix](../../submissions/0867-transpose-matrix/)

## Model Solution

```python
class Solution:
    def transpose(self, matrix: List[List[int]]) -> List[List[int]]:
        row = len(matrix)
        col = len(matrix[0])
        res = []
        for i in range(col):
            tmp = []
            for j in range(row):
                tmp.append(matrix[j][i])
            res.append(tmp)
        return res
```

## Why This Is The Model

The accepted solution explicitly uses row and column counts, so it handles rectangular matrices without square-matrix assumptions.

## Invariant or Proof Idea

After output row `i` is built, it contains every value from original column `i` in top-to-bottom order.

## Complexity

- Time: O(rows * cols)
- Space: O(rows * cols) for the returned matrix

## Review Prompt

Why is the outer loop over the original column count?
