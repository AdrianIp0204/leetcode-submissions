# Permutation Difference between Two Strings

- Pattern: index map comparison
- Original attempt: [submissions/3146-permutation-difference-between-two-strings](../../submissions/3146-permutation-difference-between-two-strings/)

## Model Solution

```python
class Solution:
    def findPermutationDifference(self, s: str, t: str) -> int:
        position = {ch: i for i, ch in enumerate(s)}

        total = 0
        for i, ch in enumerate(t):
            total += abs(i - position[ch])
        return total
```

## Why This Is The Model

Because `s` and `t` are permutations with unique characters, each character has
one position in `s` and one position in `t`. A dictionary makes the original
position lookup direct while the second scan adds the required distances.

## Invariant

For every processed character in `t`, `total` equals the sum of absolute position
differences for exactly those characters.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

What constraint lets the model store only one index per character?
