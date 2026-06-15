# Find the Prefix Common Array of Two Arrays

- Pattern: seen set + running common count
- Original attempt: [submissions/2657-find-the-prefix-common-array-of-two-arrays](../../submissions/2657-find-the-prefix-common-array-of-two-arrays/)

## Model Solution

```python
class Solution:
    def findThePrefixCommonArray(self, A: List[int], B: List[int]) -> List[int]:
        common = 0
        ans = []
        seen = set()
        for a, b in zip(A, B):
            for value in (a, b):
                if value not in seen:
                    seen.add(value)
                else:
                    common += 1
            ans.append(common)
        return ans
```

## Why This Is The Model

The accepted solution records values as they appear across both prefixes and increments the common count when a value is seen from the other array.

## Invariant or Proof Idea

After processing index `i`, `common` is the number of values that have appeared in both prefixes `A[:i+1]` and `B[:i+1]`.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why does a repeated value trigger `common += 1` under the permutation-style input?
