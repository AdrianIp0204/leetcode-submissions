# Valid Anagram

- Pattern: frequency counting
- Original attempt: [submissions/0242-valid-anagram](../../submissions/0242-valid-anagram/)

## Model Solution

```python
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        counts = {}
        for char in s:
            counts[char] = counts.get(char, 0) + 1

        for char in t:
            if char not in counts:
                return False
            counts[char] -= 1
            if counts[char] < 0:
                return False

        return True
```

## Why This Is The Model

Sorting is a solid baseline, but frequency counting is the linear-time pattern.
It also generalizes to many "same multiset of characters" problems.

## Invariant

After scanning part of `t`, `counts[char]` means how many more of that character
can still be matched from `s`.

## Complexity

- Time: O(n)
- Space: O(k), where `k` is the number of distinct characters

## Review Prompt

Why is the length check useful before building the count table?
