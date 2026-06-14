# Strictly Palindromic Number

- Pattern: brainteaser proof
- Original attempt: [submissions/2396-strictly-palindromic-number](../../submissions/2396-strictly-palindromic-number/)

## Model Solution

```python
class Solution:
    def isStrictlyPalindromic(self, n: int) -> bool:
        return False
```

## Why This Is The Model

The accepted solution returns false because the mathematical counterexample applies to every valid input.

## Invariant or Proof Idea

For any valid `n`, base `n - 2` is one of the required bases and represents `n` as non-palindromic `12`.

## Complexity

- Time: O(1)
- Space: O(1)

## Review Prompt

Which required base gives the immediate contradiction?
