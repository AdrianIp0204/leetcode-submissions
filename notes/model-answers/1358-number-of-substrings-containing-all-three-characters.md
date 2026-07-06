# Number of Substrings Containing All Three Characters

- Pattern: sliding window / count suffixes
- Original attempt: [submissions/1358-number-of-substrings-containing-all-three-characters](../../submissions/1358-number-of-substrings-containing-all-three-characters/)

## Model Solution

```python
class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        freq = [0, 0, 0]
        left = 0
        total = 0

        for right, ch in enumerate(s):
            freq[ord(ch) - ord("a")] += 1

            while all(freq):
                total += len(s) - right
                freq[ord(s[left]) - ord("a")] -= 1
                left += 1

        return total
```

## Why This Is The Model

The accepted solution uses a minimal valid window. Once `s[left:right + 1]`
contains `a`, `b`, and `c`, every longer substring with the same left boundary
is also valid, so it can add all suffix extensions at once.

## Invariant

The frequency array describes the current window `s[left:right + 1]`. The inner
loop shrinks the window only while it still contains all three required
characters.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why does a valid window ending at `right` contribute `len(s) - right`
substrings?
