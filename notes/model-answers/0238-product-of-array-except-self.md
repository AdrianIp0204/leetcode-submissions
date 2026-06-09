# Product of Array Except Self

- Pattern: prefix products / suffix products
- Original attempt: [submissions/0238-product-of-array-except-self](../../submissions/0238-product-of-array-except-self/)

## Model Solution

```python
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        answer = [1] * n

        prefix = 1
        for i in range(n):
            answer[i] = prefix
            prefix *= nums[i]

        suffix = 1
        for i in range(n - 1, -1, -1):
            answer[i] *= suffix
            suffix *= nums[i]

        return answer
```

## Why This Is The Model

The value at each index is "everything before it" times "everything after it".
Two passes give those two products without division, so zeros require no special
case.

## Invariant

Before writing `answer[i]` in the first pass, `prefix` is the product of
`nums[0:i]`. Before multiplying in the second pass, `suffix` is the product of
`nums[i + 1:]`.

## Complexity

- Time: O(n)
- Space: O(1) extra space, ignoring the output array

## Review Prompt

Why should `prefix *= nums[i]` happen after assigning `answer[i]`?
