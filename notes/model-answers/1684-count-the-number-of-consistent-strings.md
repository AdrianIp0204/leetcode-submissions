# Count the Number of Consistent Strings

- Pattern: set containment
- Original attempt: [submissions/1684-count-the-number-of-consistent-strings](../../submissions/1684-count-the-number-of-consistent-strings/)

## Model Solution

```python
class Solution:
    def countConsistentStrings(self, allowed: str, words: List[str]) -> int:
        allowed_set = set(allowed)
        ans = 0
        for word in words:
            if set(word) <= allowed_set:
                ans += 1
        return ans
```

## Why This Is The Model

The accepted solution treats each word as a set of required characters and checks whether those requirements are contained in the allowed set.

## Invariant or Proof Idea

A word is consistent exactly when every distinct character in the word belongs to `allowed_set`.

## Complexity

- Time: O(total characters in `words` + len(`allowed`))
- Space: O(a + w), for the allowed set and one word set

## Review Prompt

Why is checking distinct letters enough instead of checking every repeated character separately?
