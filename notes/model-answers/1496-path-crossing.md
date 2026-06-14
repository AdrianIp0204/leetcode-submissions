# Path Crossing

- Pattern: coordinate simulation + visited set
- Original attempt: [submissions/1496-path-crossing](../../submissions/1496-path-crossing/)

## Model Solution

```python
class Solution:
    def isPathCrossing(self, path: str) -> bool:
        moves = {
            "N" : (0, 1),
            "E" : (1, 0),
            "S" : (0, -1),
            "W" : (-1, 0)
        }
        visited = {(0,0)}
        x, y = 0, 0

        for a in path:
            dx, dy = moves[a]
            x += dx
            y += dy
            if (x, y) in visited:
                return True
            visited.add((x, y))
        return False
```

## Why This Is The Model

The accepted solution makes movement explicit and detects repeats immediately after each step.

## Invariant or Proof Idea

Before each move, `visited` contains exactly every coordinate reached so far.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why should `(0, 0)` be inserted before processing the path?
