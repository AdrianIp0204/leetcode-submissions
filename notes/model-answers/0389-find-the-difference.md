# Find the Difference

- Pattern: xor cancellation
- Original attempt: [submissions/0389-find-the-difference](../../submissions/0389-find-the-difference/)

## Model Solution

```python
class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        res = 0
        for c in s+t:
            res ^= ord(c)
        return chr(res)
```

## Why This Is The Model

The accepted solution avoids sorting or a hash map and uses the exact one-extra-character structure of the problem.

## Invariant or Proof Idea

After XORing any multiset of paired equal characters, those pairs contribute zero; only unpaired characters remain in `res`.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Which XOR property lets the characters be processed in any order?
