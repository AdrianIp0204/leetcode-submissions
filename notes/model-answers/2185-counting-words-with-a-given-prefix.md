# Counting Words With a Given Prefix

- Pattern: prefix scan
- Original attempt: [submissions/2185-counting-words-with-a-given-prefix](../../submissions/2185-counting-words-with-a-given-prefix/)

## Model Solution

```python
class Solution:
    def prefixCount(self, words: List[str], pref: str) -> int:
        return sum(word.startswith(pref) for word in words)
```

## Why This Is The Model

The condition is exactly whether each word starts with `pref`, so the built-in
prefix predicate states the requirement directly. It avoids substring checks,
manual indexing, and accidental matches that begin after index zero.

## Invariant

After scanning any prefix of `words`, the running count equals the number of
scanned words whose first `len(pref)` characters match `pref`.

## Complexity

- Time: O(n * m), where `m` is the length of `pref`
- Space: O(1)

## Review Prompt

Why is finding `pref` somewhere inside a word not enough to count that word?
