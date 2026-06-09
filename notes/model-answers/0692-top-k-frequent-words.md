# Top K Frequent Words

- Pattern: frequency map / custom sort key
- Original attempt: [submissions/0692-top-k-frequent-words](../../submissions/0692-top-k-frequent-words/)

## Model Solution

```python
class Solution:
    def topKFrequent(self, words: List[str], k: int) -> List[str]:
        counts = {}
        for word in words:
            counts[word] = counts.get(word, 0) + 1

        ordered = sorted(counts, key=lambda word: (-counts[word], word))
        return ordered[:k]
```

## Why This Is The Model

This problem is mostly about the ordering rule. The sort key says it directly:
higher count first, then lexicographically smaller word first. A heap variant is
possible, but this is the clearest model answer for learning the tie-breaker.

## Invariant

After counting, each unique word has one score: `(-frequency, word)`. Python
sorts tuples lexicographically, so the first component handles frequency and the
second component handles ties.

## Complexity

- Time: O(n + u log u), where `u` is the number of unique words
- Space: O(u)

## Review Prompt

Why does the key use `-counts[word]` instead of `counts[word]`?
