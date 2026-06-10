# Robot Return to Origin

- Pattern: net displacement simulation
- Original attempt: [submissions/0657-robot-return-to-origin](../../submissions/0657-robot-return-to-origin/)

## Model Solution

```python
class Solution:
    def judgeCircle(self, moves: str) -> bool:
        x = 0
        y = 0

        for move in moves:
            if move == "R":
                x += 1
            elif move == "L":
                x -= 1
            elif move == "U":
                y += 1
            else:
                y -= 1

        return x == 0 and y == 0
```

## Why This Is The Model

Only the final displacement matters. Horizontal and vertical moves can be tracked
independently, and the robot returns to the origin exactly when both net
displacements are zero.

## Invariant

After each move, `(x, y)` is the robot's net displacement from the origin after
executing the processed prefix.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why does the order of moves not matter for deciding whether the robot returns to
the origin?
