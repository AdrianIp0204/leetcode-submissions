# Nim Game

- Pattern: losing-position modulo cycle
- Original attempt: [submissions/0292-nim-game](../../submissions/0292-nim-game/)

## Model Solution

```python
class Solution:
    def canWinNim(self, n: int) -> bool:
        return n % 4 != 0
```

## Why This Is The Model

Every multiple of four is losing because any move takes `1`, `2`, or `3` stones and
lets the opponent return the pile to the next lower multiple of four.

## Invariant

The winning strategy is to leave the opponent with a pile size divisible by `4`.

## Complexity

- Time: O(1)
- Space: O(1)

## Review Prompt

What move should the first player make when `n % 4` is `1`, `2`, or `3`?
