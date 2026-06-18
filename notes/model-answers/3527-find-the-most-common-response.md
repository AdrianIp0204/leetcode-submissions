# Find The Most Common Response

- Pattern: per-row deduplication and counting
- Original attempt: [submissions/3527-find-the-most-common-response](../../submissions/3527-find-the-most-common-response/)

## Model Solution

```python
class Solution:
    def findCommonResponse(self, responses: List[List[str]]) -> str:
        counts = Counter()

        for row in responses:
            for word in set(row):
                counts[word] += 1

        best_count = max(counts.values())
        return min(word for word, count in counts.items() if count == best_count)
```

## Why This Is The Model

Each response list contributes at most one vote per distinct word. After that,
the winner is the highest count, with lexicographic order breaking ties.

## Invariant

After each row, `counts[word]` is the number of rows where `word` appeared at
least once.

## Complexity

- Time: O(total responses + u)
- Space: O(u)

## Review Prompt

Why must duplicates inside a single response list be removed before counting?
