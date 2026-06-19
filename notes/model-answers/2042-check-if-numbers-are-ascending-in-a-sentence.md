# Check if Numbers Are Ascending in a Sentence

- Pattern: one-pass numeric scan
- Original attempt: [submissions/2042-check-if-numbers-are-ascending-in-a-sentence](../../submissions/2042-check-if-numbers-are-ascending-in-a-sentence/)

## Model Solution

```python
class Solution:
    def areNumbersAscending(self, s: str) -> bool:
        previous = -1

        for token in s.split():
            if token.isdigit():
                current = int(token)
                if current <= previous:
                    return False
                previous = current

        return True
```

## Why This Is The Model

The submitted solution uses the direct scan. The model keeps the same idea and
uses `isdigit()` to make the token test explicit before comparing each number
with the last accepted number.

## Invariant

`previous` is the last number seen so far, and all numbers before the current
token have been strictly increasing.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why is it enough to compare each number only with the immediately previous
number?
