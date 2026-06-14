# Find Most Frequent Vowel and Consonant

- Pattern: separate frequency maps
- Original attempt: [submissions/3541-find-most-frequent-vowel-and-consonant](../../submissions/3541-find-most-frequent-vowel-and-consonant/)

## Model Solution

```python
class Solution:
    def maxFreqSum(self, s: str) -> int:
        vowels = set("aeiou")
        vowel_counts = {}
        consonant_counts = {}

        for ch in s:
            if ch in vowels:
                vowel_counts[ch] = vowel_counts.get(ch, 0) + 1
            else:
                consonant_counts[ch] = consonant_counts.get(ch, 0) + 1

        max_vowel = max(vowel_counts.values(), default=0)
        max_consonant = max(consonant_counts.values(), default=0)
        return max_vowel + max_consonant
```

## Why This Is The Model

The problem asks for the most frequent vowel plus the most frequent consonant, so
the categories should stay separate throughout the scan. `default=0` makes empty
categories explicit instead of relying on seeded placeholder counts.

## Invariant

After each character, the two dictionaries contain exact frequencies for the
vowel and consonant categories seen so far.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why would a single combined frequency map lose information needed for the final
sum?
