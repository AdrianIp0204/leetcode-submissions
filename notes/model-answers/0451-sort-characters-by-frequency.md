# Sort Characters By Frequency

- Pattern: frequency counting and expansion
- Original attempt: [submissions/0451-sort-characters-by-frequency](../../submissions/0451-sort-characters-by-frequency/)

## Model Solution

```python
from collections import Counter


class Solution:
    def frequencySort(self, s: str) -> str:
        pieces = []

        for char, count in Counter(s).most_common():
            pieces.append(char * count)

        return "".join(pieces)
```

## Why This Is The Model

The algorithm separates the job into three clear steps: count characters, order
the distinct characters by frequency, then expand each character back into the
output string.

## Invariant

After adding a piece for a character, the output prefix contains all copies of
that character and all earlier characters have frequency at least as large.

## Complexity

- Time: O(n + k log k), where `k` is the number of distinct characters
- Space: O(n + k)

## Review Prompt

Why is it enough to sort only the distinct characters instead of sorting every
character occurrence?
