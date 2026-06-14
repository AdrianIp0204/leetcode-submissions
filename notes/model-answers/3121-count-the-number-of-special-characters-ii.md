# Count the Number of Special Characters II

- Pattern: ordered case tracking
- Original attempt: [submissions/3121-count-the-number-of-special-characters-ii](../../submissions/3121-count-the-number-of-special-characters-ii/)

## Model Solution

```python
class Solution:
    def numberOfSpecialChars(self, word: str) -> int:
        seen = set()
        special = set()
        for w in word:
            if w not in seen:
                if w.isupper():
                    if w.lower() in seen:
                        special.add(w.lower())
                    else:
                        seen.add(w.lower())
                    seen.add(w)
                else:
                    seen.add(w)
            elif w in special:
                special.remove(w)
        return len(special)
```

## Why This Is The Model

The accepted solution promotes a lowercase letter to `special` only when uppercase appears after it, then removes it if a later lowercase breaks the rule.

## Invariant or Proof Idea

At every point, `special` contains exactly letters that have seen lowercase-before-uppercase and have not seen a disqualifying lowercase afterward.

## Complexity

- Time: O(n)
- Space: O(1), bounded by alphabet size

## Review Prompt

Why can a lowercase character after its uppercase remove a letter from `special`?
