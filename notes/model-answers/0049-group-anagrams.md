# Group Anagrams

- Pattern: hash map / canonical key
- Original attempt: [submissions/0049-group-anagrams](../../submissions/0049-group-anagrams/)

## Model Solution

```python
from collections import defaultdict


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groups = defaultdict(list)

        for s in strs:
            count = [0] * 26
            for ch in s:
                count[ord(ch) - ord("a")] += 1

            groups[tuple(count)].append(s)

        return list(groups.values())
```

## Why This Is The Model

The accepted attempt compared frequency dictionaries by scanning a list of seen
groups. The model version keeps the same correct idea but turns the letter counts
into an immutable tuple, so it can use a dictionary lookup directly.

Sorting each word is also valid, but a 26-slot count key avoids the O(k log k)
cost of sorting every string.

## Invariant

Two strings are in the same bucket if and only if their 26 letter counts are
identical. The tuple key represents exactly that count vector.

## Complexity

- Time: O(n * k), where `n` is the number of strings and `k` is max string length
- Space: O(n * k)

## Review Prompt

Why does `tuple(count)` work as a dictionary key when `count` itself does not?
