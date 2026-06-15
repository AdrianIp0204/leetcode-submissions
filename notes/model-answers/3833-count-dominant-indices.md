# Count Dominant Indices

- Pattern: prefix/suffix aggregate scan
- Original attempt: [submissions/3833-count-dominant-indices](../../submissions/3833-count-dominant-indices/)

## Model Solution

```python
class Solution:
    def dominantIndices(self, nums: List[int]) -> int:
        suffix_sum = sum(nums)
        n = len(nums)
        ans = 0

        for i in range(n - 1):
            suffix_sum -= nums[i]
            suffix_count = n - 1 - i
            if nums[i] * suffix_count > suffix_sum:
                ans += 1

        return ans
```

## Why This Is The Model

Morrow draft: this follows the accepted code. The code-supported idea is to
compare each value to the average of the remaining suffix while avoiding
floating-point division.

## Invariant

At index `i`, `suffix_sum` and `suffix_count` describe exactly the elements to
the right of `i`.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why does multiplying by `suffix_count` avoid a division-based comparison?
