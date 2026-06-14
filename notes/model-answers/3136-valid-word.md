# Valid Word

- Pattern: character validation with required flags
- Original attempt: [submissions/3136-valid-word](../../submissions/3136-valid-word/)

## Model Solution

```python
class Solution:
    def isValid(self, word: str) -> bool:
        if len(word) < 3:
            return False

        has_vowel = False
        has_consonant = False
        vowels = set("aeiouAEIOU")

        for ch in word:
            if not ch.isalnum():
                return False
            if ch.isalpha():
                if ch in vowels:
                    has_vowel = True
                else:
                    has_consonant = True

        return has_vowel and has_consonant
```

## Why This Is The Model

The rules separate into one immediate rejection and two positive requirements.
The scan rejects any non-alphanumeric character, ignores digits for the letter
requirements, and records whether at least one vowel and one consonant were seen.

## Invariant

After each scanned character, every previous character is allowed, and the two
flags accurately describe whether a vowel and consonant have appeared so far.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why are digits allowed to pass validation without setting either requirement flag?
