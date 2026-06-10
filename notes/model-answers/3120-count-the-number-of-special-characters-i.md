# Count the Number of Special Characters I

- Pattern: set membership with case pairing
- Original attempt: [submissions/3120-count-the-number-of-special-characters-i](../../submissions/3120-count-the-number-of-special-characters-i/)

## Model Solution

```python
class Solution:
    def numberOfSpecialChars(self, word: str) -> int:
        seen = set(word)
        count = 0

        for code in range(ord("a"), ord("z") + 1):
            lower = chr(code)
            upper = lower.upper()
            if lower in seen and upper in seen:
                count += 1

        return count
```

## Why This Is The Model

The question counts distinct letters, not occurrences. A set removes duplicates,
and scanning the alphabet once asks the exact condition for each possible
letter: are both lowercase and uppercase forms present?

## Invariant

After scanning through a letter, `count` equals the number of alphabet letters up
to that point whose lower- and uppercase forms both appear in `word`.

## Complexity

- Time: O(n + 26)
- Space: O(n)

## Review Prompt

Why would iterating over every character in `word` risk counting the same letter
more than once?
