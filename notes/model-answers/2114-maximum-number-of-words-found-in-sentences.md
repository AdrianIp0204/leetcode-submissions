# Maximum Number of Words Found in Sentences

- Pattern: string split maximum
- Original attempt: [submissions/2114-maximum-number-of-words-found-in-sentences](../../submissions/2114-maximum-number-of-words-found-in-sentences/)

## Model Solution

```python
class Solution:
    def mostWordsFound(self, sentences: List[str]) -> int:
        most = 0

        for sentence in sentences:
            most = max(most, len(sentence.split()))

        return most
```

## Why This Is The Model

Splitting each sentence gives its words, and keeping the maximum split length
answers the problem directly. Starting from zero also works naturally because
the first sentence will set the baseline.

## Invariant

After each sentence is processed, `most` is the largest word count among all
sentences seen so far.

## Complexity

- Time: O(total characters)
- Space: O(w), for the words in the current sentence

## Review Prompt

How could counting spaces replace `split()` while preserving the same invariant?
