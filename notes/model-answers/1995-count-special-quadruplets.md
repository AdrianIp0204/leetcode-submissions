# Count Special Quadruplets

- Pattern: brute-force enumeration
- Original attempt: [submissions/1995-count-special-quadruplets](../../submissions/1995-count-special-quadruplets/)

## Model Solution

```python
class Solution:
    def countQuadruplets(self, nums: List[int]) -> int:
        ans = 0
        n = len(nums)

        for a in range(n - 3):
            for b in range(a + 1, n - 2):
                for c in range(b + 1, n - 1):
                    for d in range(c + 1, n):
                        if nums[a] + nums[b] + nums[c] == nums[d]:
                            ans += 1

        return ans
```

## Why This Is The Model

The nested loop bounds encode the required index order, so the body only needs
the value equation.

## Invariant

Every generated tuple satisfies `a < b < c < d`.

## Complexity

- Time: O(n^4)
- Space: O(1)

## Review Prompt

How could a frequency table of future values reduce the number of loops?
