# Minimum Element After Replacement With Digit Sum

- Pattern: digit sum scan
- Original attempt: [submissions/3300-minimum-element-after-replacement-with-digit-sum](../../submissions/3300-minimum-element-after-replacement-with-digit-sum/)

## Model Solution

```python
class Solution:
    def minElement(self, nums: List[int]) -> int:
        res = float('inf')
        for n in nums:
            tmp = 0
            while n:
                tmp += n%10
                n //= 10
            if tmp < res:
                res = tmp
        return res
```

## Why This Is The Model

The accepted solution computes exactly the value each element becomes and updates a running minimum.

## Invariant or Proof Idea

After processing each number, `res` is the smallest digit sum seen so far.

## Complexity

- Time: O(total digits)
- Space: O(1)

## Review Prompt

Why can the original numeric order differ from the digit-sum order?
