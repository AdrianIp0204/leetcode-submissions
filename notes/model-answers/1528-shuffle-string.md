# Shuffle String

- Pattern: index-placement reconstruction
- Original attempt: [submissions/1528-shuffle-string](../../submissions/1528-shuffle-string/)

## Model Solution

```python
class Solution:
    def restoreString(self, s: str, indices: List[int]) -> str:
        restored = [""] * len(s)

        for char, target in zip(s, indices):
            restored[target] = char

        return "".join(restored)
```

## Why This Is The Model

Each character is paired with its final index, so the cleanest move is direct
placement into a preallocated result array. Joining once at the end avoids
repeated string rebuilding.

## Invariant

After processing a pair `(char, target)`, `restored[target]` contains the
character that belongs at that final position.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why are `indices` target positions rather than positions to read from?
