# Number of Strings That Appear as Substrings in Word

- Pattern: substring membership count
- Original attempt: [submissions/1967-number-of-strings-that-appear-as-substrings-in-word](../../submissions/1967-number-of-strings-that-appear-as-substrings-in-word/)

## Model Solution

```python
class Solution:
    def numOfStrings(self, patterns: List[str], word: str) -> int:
        count = 0

        for pattern in patterns:
            if pattern in word:
                count += 1

        return count
```

## Why This Is The Model

Each pattern is judged independently, and Python's substring membership operator
matches the problem statement directly. The count increases once for every
pattern that appears in `word`.

## Invariant

After processing the first `i` patterns, `count` equals the number of those
patterns that occur as substrings of `word`.

## Complexity

- Time: O(p * L), where `p` is the number of patterns and `L` is the word search cost
- Space: O(1)

## Review Prompt

Why should duplicate pattern strings still be counted separately if they both
appear in the input list?
