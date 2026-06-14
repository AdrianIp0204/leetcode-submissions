# String Matching in an Array

- Pattern: substring search over word pairs
- Original attempt: [submissions/1408-string-matching-in-an-array](../../submissions/1408-string-matching-in-an-array/)

## Model Solution

```python
class Solution:
    def stringMatching(self, words: List[str]) -> List[str]:
        res = []
        for w in words:
            lw = len(w)
            for s in words:
                if len(s) > lw:
                    if w in s:
                        res.append(w)
                        break
        return res
```

## Why This Is The Model

The accepted solution expresses the condition directly and breaks after the first containing word to avoid duplicates in the result.

## Invariant or Proof Idea

After each outer word is processed, it is in `res` exactly if a longer containing word has been found.

## Complexity

- Time: O(w^2 * L) in the straightforward pair scan
- Space: O(r) for the result

## Review Prompt

Why does the inner loop break after appending a word?
