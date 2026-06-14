# Find Common Characters

- Pattern: counter intersection
- Original attempt: [submissions/1002-find-common-characters](../../submissions/1002-find-common-characters/)

## Model Solution

```python
from collections import Counter


class Solution:
    def commonChars(self, words: List[str]) -> List[str]:
        common = Counter(words[0])

        for word in words[1:]:
            common &= Counter(word)

        return list(common.elements())
```

## Why This Is The Model

Counter intersection keeps the minimum frequency for each character across the
words. That exactly models "appears in every word," including duplicates such as
two common `l` characters.

## Invariant

After processing each word, `common[char]` is the minimum number of times that
character appears in all words seen so far.

## Complexity

- Time: O(total characters)
- Space: O(k), where `k` is the character set size

## Review Prompt

Why would a set intersection lose information for this problem?
