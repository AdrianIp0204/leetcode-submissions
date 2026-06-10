# Check If Two String Arrays are Equivalent

- Pattern: normalize then compare
- Original attempt: [submissions/1662-check-if-two-string-arrays-are-equivalent](../../submissions/1662-check-if-two-string-arrays-are-equivalent/)

## Model Solution

```python
class Solution:
    def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
        return "".join(word1) == "".join(word2)
```

## Why This Is The Model

The chunk boundaries do not affect the final string. Joining each array
normalizes both inputs into plain strings, and the equality comparison already
returns the required boolean.

## Invariant

The joined form of each array preserves every character in order while removing
irrelevant chunk boundaries.

## Complexity

- Time: O(n + m), where `n` and `m` are the total characters in both arrays
- Space: O(n + m) for the joined strings

## Review Prompt

Why is `True if comparison else False` redundant when the comparison already
produces a boolean?
