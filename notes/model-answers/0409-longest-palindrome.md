# Longest Palindrome

- Pattern: frequency parity
- Original attempt: [submissions/0409-longest-palindrome](../../submissions/0409-longest-palindrome/)

## Model Solution

```python
class Solution:
    def longestPalindrome(self, s: str) -> int:
        counts = {}

        for char in s:
            counts[char] = counts.get(char, 0) + 1

        length = 0
        has_odd = False

        for count in counts.values():
            length += (count // 2) * 2
            if count % 2 == 1:
                has_odd = True

        return length + (1 if has_odd else 0)
```

## Why This Is The Model

Each pair can be placed symmetrically in the palindrome. At most one odd-count
character can contribute a single center character.

## Invariant

`length` counts only characters that can be paired on both sides of the palindrome.

## Complexity

- Time: O(n)
- Space: O(k), where `k` is the number of distinct characters

## Review Prompt

Why can only one odd-frequency character add its unpaired character to the answer?
