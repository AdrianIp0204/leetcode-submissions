# Check if the Sentence Is Pangram

- Pattern: fixed alphabet coverage
- Original attempt: [submissions/1832-check-if-the-sentence-is-pangram](../../submissions/1832-check-if-the-sentence-is-pangram/)

## Model Solution

```python
class Solution:
    def checkIfPangram(self, sentence: str) -> bool:
        seen = set(sentence)
        return len(seen) == 26
```

## Why This Is The Model

The input only contains lowercase English letters, so a set directly represents
which letters have appeared. A sentence is a pangram exactly when the set has all
26 possible letters.

## Invariant

After scanning any prefix of `sentence`, `seen` contains exactly the distinct
letters that appear in that prefix.

## Complexity

- Time: O(n)
- Space: O(1), because the alphabet size is fixed at 26

## Review Prompt

Why does checking the set size work only because the input alphabet is fixed?
