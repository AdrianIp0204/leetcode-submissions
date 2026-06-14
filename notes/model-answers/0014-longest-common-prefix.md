# Longest Common Prefix

- Pattern: shortest-string boundary / prefix scan
- Original attempt: [submissions/0014-longest-common-prefix](../../submissions/0014-longest-common-prefix/)

## Model Solution

```python
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        prefix = min(strs, key=len)

        for i, ch in enumerate(prefix):
            for s in strs:
                if s[i] != ch:
                    return prefix[:i]

        return prefix
```

## Why This Is The Model

The shortest string is the maximum possible answer, so it gives the scan a hard
boundary. The accepted attempt uses the same idea but copies every string into a
list and sorts all strings by length. The model answer finds the shortest string
directly and checks characters in place.

## Invariant

Before testing index `i`, every string matches `prefix[:i]`. The first mismatch
at index `i` proves that no longer common prefix can exist.

## Complexity

- Time: O(m * p), where `m` is the number of strings and `p` is the shortest length
- Space: O(1), ignoring the returned prefix slice

## Review Prompt

Why is it enough to stop scanning at the shortest string?
