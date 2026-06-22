# Sorting the Sentence

- Pattern: place by encoded index
- Original attempt: [submissions/1859-sorting-the-sentence](../../submissions/1859-sorting-the-sentence/)

## Model Solution

```python
class Solution:
    def sortSentence(self, s: str) -> str:
        words = s.split()
        ordered = [""] * len(words)

        for word in words:
            index = int(word[-1]) - 1
            ordered[index] = word[:-1]

        return " ".join(ordered)
```

## Why This Is The Model

The accepted solution avoids a comparison sort by using the trailing digit as a
direct destination index. Each word is touched once, then the ordered words are
joined.

## Invariant

After processing a word, its text without the trailing index is stored at the
only position it can occupy in the final sentence.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

What would change if positions could have more than one digit?
