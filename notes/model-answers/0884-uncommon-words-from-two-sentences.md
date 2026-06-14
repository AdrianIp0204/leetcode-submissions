# Uncommon Words from Two Sentences

- Pattern: combined frequency count
- Original attempt: [submissions/0884-uncommon-words-from-two-sentences](../../submissions/0884-uncommon-words-from-two-sentences/)

## Model Solution

```python
from collections import Counter


class Solution:
    def uncommonFromSentences(self, s1: str, s2: str) -> List[str]:
        counts = Counter(s1.split())
        counts.update(s2.split())

        return [word for word, count in counts.items() if count == 1]
```

## Why This Is The Model

The definition of uncommon depends on total frequency across both sentences.
Counting the combined word stream once makes words that appear in both sentences
or repeat inside one sentence naturally fail the `count == 1` test.

## Invariant

After both sentences are counted, `counts[word]` is the total number of times
`word` appears across the two inputs.

## Complexity

- Time: O(n + m), where `n` and `m` are the word counts of the sentences
- Space: O(n + m)

## Review Prompt

Why is a word that appears once in each sentence not uncommon?
