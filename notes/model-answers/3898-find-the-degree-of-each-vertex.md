# Find the Degree of Each Vertex

- Pattern: adjacency matrix row sums
- Original attempt: [submissions/3898-find-the-degree-of-each-vertex](../../submissions/3898-find-the-degree-of-each-vertex/)

## Model Solution

```python
class Solution:
    def findDegrees(self, matrix: list[list[int]]) -> list[int]:
        return [sum(m) for m in matrix]
```

## Why This Is The Model

The accepted solution maps the graph definition directly to a list of row sums.

## Invariant or Proof Idea

Each output entry equals the number of `1` entries in the corresponding matrix row.

## Complexity

- Time: O(n^2)
- Space: O(n) for the result

## Review Prompt

Why does one row correspond to one vertex's degree?
