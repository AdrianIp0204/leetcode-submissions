# Regular Expression Matching

- Pattern: dynamic programming over pattern tokens
- Original attempt: [submissions/0010-regular-expression-matching](../../submissions/0010-regular-expression-matching/)

## Model Solution

```python
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        memo = {}

        def dp(i: int, j: int) -> bool:
            if (i, j) in memo:
                return memo[(i, j)]
            if j == len(p):
                return i == len(s)

            first_matches = i < len(s) and p[j] in {s[i], "."}

            if j + 1 < len(p) and p[j + 1] == "*":
                ans = dp(i, j + 2) or (first_matches and dp(i + 1, j))
            else:
                ans = first_matches and dp(i + 1, j + 1)

            memo[(i, j)] = ans
            return ans

        return dp(0, 0)
```

## Why This Is The Model

The accepted attempt delegates the whole problem to Python's regex engine. That
is compact, but the model answer shows the state transition the problem is meant
to teach: match the next pattern token against the next string character, and
handle `*` as either zero copies or one more copy of the preceding token.

## Invariant

`dp(i, j)` is true exactly when `s[i:]` can be matched by `p[j:]`. Memoization
ensures each suffix pair is solved once.

## Complexity

- Time: O(m * n), where `m = len(s)` and `n = len(p)`
- Space: O(m * n)

## Review Prompt

For a `*` token, why does the recursion stay at the same pattern index after
consuming one matching character?
