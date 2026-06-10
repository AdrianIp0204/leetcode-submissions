# Split a String in Balanced Strings

- Pattern: greedy running balance
- Original attempt: [submissions/1221-split-a-string-in-balanced-strings](../../submissions/1221-split-a-string-in-balanced-strings/)

## Model Solution

```python
class Solution:
    def balancedStringSplit(self, s: str) -> int:
        balance = 0
        pieces = 0

        for char in s:
            if char == "R":
                balance += 1
            else:
                balance -= 1

            if balance == 0:
                pieces += 1

        return pieces
```

## Why This Is The Model

A balanced substring ends exactly when the running counts of `L` and `R` become
equal again. Cutting greedily at every zero balance maximizes the number of
balanced pieces and avoids repeated slice-sum work.

## Invariant

Within the current piece, `balance` is the number of `R` characters minus the
number of `L` characters since the last split.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why does splitting immediately when `balance == 0` produce the maximum number of
balanced substrings?
