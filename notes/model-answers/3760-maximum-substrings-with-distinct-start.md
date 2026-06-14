# Maximum Substrings With Distinct Start

- Pattern: set of starting characters
- Original attempt: [submissions/3760-maximum-substrings-with-distinct-start](../../submissions/3760-maximum-substrings-with-distinct-start/)

## Model Solution

```python
class Solution:
    def maxDistinct(self, s: str) -> int:
        return len(set(s))
```

## Why This Is The Model

The accepted solution recognizes the combinatorial simplification and returns `len(set(s))`.

## Invariant or Proof Idea

The set contains exactly the different characters that can serve as a substring start.

## Complexity

- Time: O(n)
- Space: O(k), where `k` is the number of distinct characters

## Review Prompt

Why does another occurrence of an already-seen character not add a new distinct start?
