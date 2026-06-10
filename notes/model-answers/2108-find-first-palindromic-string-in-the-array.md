# Find First Palindromic String in the Array

- Pattern: first-match scan
- Original attempt: [submissions/2108-find-first-palindromic-string-in-the-array](../../submissions/2108-find-first-palindromic-string-in-the-array/)

## Model Solution

```python
class Solution:
    def firstPalindrome(self, words: List[str]) -> str:
        for word in words:
            if word == word[::-1]:
                return word

        return ""
```

## Why This Is The Model

The answer is the first word in input order that equals its reverse. Returning
immediately preserves that ordering requirement, and the empty string handles
the case where no word is a palindrome.

## Invariant

Before checking each word, every earlier word has already been proven not to be
a palindrome.

## Complexity

- Time: O(total characters checked)
- Space: O(L), for reversing the current word

## Review Prompt

Why would collecting all palindromes first be unnecessary work for this
problem?
