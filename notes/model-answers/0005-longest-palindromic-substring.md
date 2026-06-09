# Longest Palindromic Substring

- Pattern: expand around center
- Original attempt: [submissions/0005-longest-palindromic-substring](../../submissions/0005-longest-palindromic-substring/)

## Model Solution

```python
class Solution:
    def longestPalindrome(self, s: str) -> str:
        def expand(left: int, right: int) -> tuple[int, int]:
            while left >= 0 and right < len(s) and s[left] == s[right]:
                left -= 1
                right += 1
            return left + 1, right - 1

        best_left = 0
        best_right = 0

        for center in range(len(s)):
            left, right = expand(center, center)
            if right - left > best_right - best_left:
                best_left, best_right = left, right

            left, right = expand(center, center + 1)
            if right - left > best_right - best_left:
                best_left, best_right = left, right

        return s[best_left:best_right + 1]
```

## Why This Is The Model

The accepted attempt tests many substrings and reverses slices to check whether
they are palindromes. The model answer uses the fact that every palindrome has a
center. Expanding from each possible odd and even center finds the longest
palindrome without rebuilding every candidate substring.

## Invariant

For a fixed center, `expand` stops only after the current bounds can no longer
form a palindrome. The returned bounds are therefore the longest palindrome for
that center.

## Complexity

- Time: O(n^2)
- Space: O(1)

## Review Prompt

Why do we need to expand around both `(center, center)` and
`(center, center + 1)`?
