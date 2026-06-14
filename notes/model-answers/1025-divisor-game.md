# Divisor Game

- Pattern: game theory parity
- Original attempt: [submissions/1025-divisor-game](../../submissions/1025-divisor-game/)

## Model Solution

```python
class Solution:
    def divisorGame(self, n: int) -> bool:
        return n%2==0
```

## Why This Is The Model

The accepted one-liner captures the full game invariant rather than simulating moves.

## Invariant or Proof Idea

Even states are winning because a move to an odd state exists; odd states are losing because every legal move leaves an even state.

## Complexity

- Time: O(1)
- Space: O(1)

## Review Prompt

Why can Alice always move from an even `n` to an odd number?
