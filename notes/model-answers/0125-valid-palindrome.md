# Valid Palindrome

- Pattern: two pointers
- Original attempt: [submissions/0125-valid-palindrome](../../submissions/0125-valid-palindrome/)

## Model Solution

```python
class Solution:
    def isPalindrome(self, s: str) -> bool:
        left, right = 0, len(s) - 1

        while left < right:
            while left < right and not s[left].isalnum():
                left += 1
            while left < right and not s[right].isalnum():
                right -= 1

            if s[left].lower() != s[right].lower():
                return False

            left += 1
            right -= 1

        return True
```

## Why This Is The Model

Filtering into a new list is clear, but the two-pointer version practices the
intended skill: compare the next meaningful character from each end without
allocating a normalized copy.

## Invariant

Everything outside the `[left, right]` window has already been checked and
matched under the problem's normalization rules.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why do the inner skip loops need the condition `left < right`?
