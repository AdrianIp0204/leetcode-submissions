# Build Array from Permutation

- Pattern: array mapping
- Original attempt: [submissions/1920-build-array-from-permutation](../../submissions/1920-build-array-from-permutation/)

## Model Solution

```python
class Solution:
    def buildArray(self, n: List[int]) -> List[int]:
        return [n[i] for i in n]
```

## Why This Is The Model

The accepted solution is the direct definition of the target array.

## Invariant or Proof Idea

After position `i` is produced, it equals the original value at index `nums[i]`.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why does this require reading from the original array values?
