# Find Missing Elements

- Pattern: range scan + membership check
- Original attempt: [submissions/3731-find-missing-elements](../../submissions/3731-find-missing-elements/)

## Model Solution

```python
class Solution:
    def findMissingElements(self, nums: List[int]) -> List[int]:
        ans = []
        for value in range(min(nums) + 1, max(nums)):
            if value not in nums:
                ans.append(value)
        return ans
```

## Why This Is The Model

The accepted solution scans the open interval between the minimum and maximum values and records values not present in the input.

## Invariant or Proof Idea

Every candidate missing value must be strictly between the observed minimum and maximum; the loop checks each such candidate once.

## Complexity

- Time: O(r * n), where `r = max(nums) - min(nums)`
- Space: O(r) for the answer

## Review Prompt

How would converting `nums` to a set change the membership cost?
