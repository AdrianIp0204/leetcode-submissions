# Number of Good Pairs

- Pattern: pair enumeration
- Original attempt: [submissions/1512-number-of-good-pairs](../../submissions/1512-number-of-good-pairs/)

## Model Solution

```python
class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        ans = 0
        for i, n in enumerate(nums):
            for j in range(i + 1, len(nums)):
                if nums[j] == n:
                    ans += 1
        return ans
```

## Why This Is The Model

The accepted solution directly checks each index pair once with `j > i`, matching the pair definition without double counting.

## Invariant or Proof Idea

When the outer loop is at `i`, all valid pairs starting at `i` are counted exactly once by scanning the suffix after `i`.

## Complexity

- Time: O(n^2)
- Space: O(1)

## Review Prompt

How would a frequency map reduce the time after seeing this brute-force structure?
