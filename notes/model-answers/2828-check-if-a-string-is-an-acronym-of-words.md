# Check if a String Is an Acronym of Words

- Pattern: zip comparison
- Original attempt: [submissions/2828-check-if-a-string-is-an-acronym-of-words](../../submissions/2828-check-if-a-string-is-an-acronym-of-words/)

## Model Solution

```python
class Solution:
    def isAcronym(self, words: List[str], s: str) -> bool:
        if len(words) != len(s):
            return False
        for w, i in zip(words, s):
            if w[0] != i:
                return False
        return True
```

## Why This Is The Model

The accepted solution combines the length guard with a direct first-letter scan.

## Invariant or Proof Idea

After each pair, every processed acronym character equals the first letter of its corresponding word.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

What bug would appear if length was not checked before `zip`?
