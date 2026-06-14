# Truncate Sentence

- Pattern: split and join first k words
- Original attempt: [submissions/1816-truncate-sentence](../../submissions/1816-truncate-sentence/)

## Model Solution

```python
class Solution:
    def truncateSentence(self, s: str, k: int) -> str:
        return " ".join(s.split(maxsplit=k)[:k])
```

## Why This Is The Model

The accepted solution lets `split` identify words and uses `join` to rebuild valid spacing.

## Invariant or Proof Idea

The sliced list contains exactly the first `k` words in their original order.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why is joining the selected words better than manually trimming characters?
