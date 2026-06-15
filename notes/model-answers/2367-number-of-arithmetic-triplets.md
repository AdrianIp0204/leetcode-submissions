# Number of Arithmetic Triplets

- Pattern: triple enumeration
- Original attempt: [submissions/2367-number-of-arithmetic-triplets](../../submissions/2367-number-of-arithmetic-triplets/)

## Model Solution

```python
class Solution:
    def arithmeticTriplets(self, nums: List[int], diff: int) -> int:
        ans = 0
        for i in range(len(nums) - 2):
            for j in range(i + 1, len(nums) - 1):
                if nums[j] - nums[i] == diff:
                    for k in range(j + 1, len(nums)):
                        if nums[k] - nums[j] == diff:
                            ans += 1
        return ans
```

## Why This Is The Model

The accepted solution keeps indices ordered and only counts triples whose adjacent value gaps both equal `diff`.

## Invariant or Proof Idea

The nested loops maintain `i < j < k`, so every counted triple has the required index order and each possible ordered triple is visited once.

## Complexity

- Time: O(n^3)
- Space: O(1)

## Review Prompt

How could a set check for `num + diff` and `num + 2 * diff` simplify this?
