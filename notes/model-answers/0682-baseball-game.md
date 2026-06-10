# Baseball Game

- Pattern: stack simulation
- Original attempt: [submissions/0682-baseball-game](../../submissions/0682-baseball-game/)

## Model Solution

```python
class Solution:
    def calPoints(self, operations: List[str]) -> int:
        scores = []

        for operation in operations:
            if operation == "C":
                scores.pop()
            elif operation == "D":
                scores.append(scores[-1] * 2)
            elif operation == "+":
                scores.append(scores[-1] + scores[-2])
            else:
                scores.append(int(operation))

        return sum(scores)
```

## Why This Is The Model

The stack stores only valid previous round scores. Each operation either removes
the last valid score, derives a new score from recent valid scores, or pushes a
literal score.

## Invariant

After each operation, `scores` contains exactly the valid round scores that
remain after applying all processed operations.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why does the `+` operation read the last two stack values instead of the last two
raw operations?
