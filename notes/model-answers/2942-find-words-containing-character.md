# Find Words Containing Character

- Pattern: filtered index list
- Original attempt: [submissions/2942-find-words-containing-character](../../submissions/2942-find-words-containing-character/)

## Model Solution

```python
class Solution:
    def findWordsContaining(self, words: List[str], x: str) -> List[int]:
        return [i for i, word in enumerate(words) if x in word]
```

## Why This Is The Model

The answer asks for indices, so `enumerate` keeps each word attached to its
position while filtering. The comprehension naturally preserves the original
order and avoids any extra bookkeeping.

## Invariant

After scanning the first `i` words, the result contains exactly the indices less
than `i` whose words contain `x`, in increasing order.

## Complexity

- Time: O(total characters scanned)
- Space: O(k), where `k` is the number of matching words

## Review Prompt

Why should the loop append `i` rather than `word` when a match is found?
