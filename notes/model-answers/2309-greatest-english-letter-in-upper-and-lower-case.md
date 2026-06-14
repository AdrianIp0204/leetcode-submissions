# Greatest English Letter in Upper and Lower Case

- Pattern: set membership + max character
- Original attempt: [submissions/2309-greatest-english-letter-in-upper-and-lower-case](../../submissions/2309-greatest-english-letter-in-upper-and-lower-case/)

## Model Solution

```python
class Solution:
    def greatestLetter(self, s: str) -> str:
        wet = set(i for i in s if i.islower())
        res = 0
        for w in wet:
            up = w.upper()
            if up in s:
                if ord(up) > res:
                    res = ord(up)
        return "" if res == 0 else chr(res)
```

## Why This Is The Model

The accepted solution limits candidates to lowercase letters and compares uppercase characters to keep the maximum answer.

## Invariant or Proof Idea

After each candidate lowercase letter, `res` is the largest uppercase letter seen so far that has both cases in the string.

## Complexity

- Time: O(n) average membership plus up to 26 candidates
- Space: O(n) for the set

## Review Prompt

Why is the final answer compared using uppercase character order?
