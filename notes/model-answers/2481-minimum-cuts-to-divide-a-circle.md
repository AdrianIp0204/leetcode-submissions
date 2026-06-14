# Minimum Cuts to Divide a Circle

- Pattern: geometry case analysis
- Original attempt: [submissions/2481-minimum-cuts-to-divide-a-circle](../../submissions/2481-minimum-cuts-to-divide-a-circle/)

## Model Solution

```python
class Solution:
    def numberOfCuts(self, n: int) -> int:
        return 0 if n==1 else n if n%2 else n//2
```

## Why This Is The Model

The accepted solution is the complete case split: one, even, or odd.

## Invariant or Proof Idea

The returned cut count is the minimum case formula for the requested number of equal slices.

## Complexity

- Time: O(1)
- Space: O(1)

## Review Prompt

Why do even slice counts need only `n / 2` cuts?
