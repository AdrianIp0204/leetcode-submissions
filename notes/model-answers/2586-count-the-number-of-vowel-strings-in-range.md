# Count the Number of Vowel Strings in Range

- Pattern: bounded scan
- Original attempt: [submissions/2586-count-the-number-of-vowel-strings-in-range](../../submissions/2586-count-the-number-of-vowel-strings-in-range/)

## Model Solution

```python
class Solution:
    def vowelStrings(self, words: list[str], left: int, right: int) -> int:
        vowels = {"a", "e", "i", "o", "u"}
        count = 0

        for word in words[left:right + 1]:
            if word[0] in vowels and word[-1] in vowels:
                count += 1

        return count
```

## Why This Is The Model

The submitted solution uses the intended constant-size vowel set and checks only
the requested index range. Slicing the range in the model makes the scan target
visible while preserving the same logic.

## Invariant

After processing any prefix of `words[left:right + 1]`, `count` equals the
number of processed words whose first and last characters are both vowels.

## Complexity

- Time: O(right - left + 1)
- Space: O(1)

## Review Prompt

Why do you only need to check the first and last character of each word?

