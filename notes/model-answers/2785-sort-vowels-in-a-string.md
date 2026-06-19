# Sort Vowels in a String

- Pattern: collect and replace selected positions
- Original attempt: [submissions/2785-sort-vowels-in-a-string](../../submissions/2785-sort-vowels-in-a-string/)

## Model Solution

```python
class Solution:
    def sortVowels(self, s: str) -> str:
        vowels = set("AEIOUaeiou")
        chars = list(s)
        positions = []
        values = []

        for index, ch in enumerate(s):
            if ch in vowels:
                positions.append(index)
                values.append(ch)

        values.sort()

        for index, ch in zip(positions, values):
            chars[index] = ch

        return "".join(chars)
```

## Why This Is The Model

The submitted solution preserves consonant positions and sorts only the vowels.
The model makes the two moving parts explicit: record vowel positions, sort the
vowel characters, then write them back in position order.

## Invariant

Non-vowel characters are never changed, and vowel positions are filled from left
to right with the sorted vowel list.

## Complexity

- Time: O(n log n)
- Space: O(n)

## Review Prompt

Why is it safe to zip the original vowel positions with the sorted vowel values?
