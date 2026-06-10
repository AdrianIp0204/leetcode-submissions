# Concatenation of Array

- Pattern: array duplication
- Original attempt: [submissions/1929-concatenation-of-array](../../submissions/1929-concatenation-of-array/)

## Model Solution

```python
class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        return nums + nums
```

## Why This Is The Model

The target array is exactly the original sequence followed by the same sequence
again. `nums + nums` states that directly and avoids mutating the input list
while forming the required output.

## Invariant

For every valid index `i`, the answer has `nums[i]` at both positions `i` and
`i + len(nums)`.

## Complexity

- Time: O(n)
- Space: O(n), for the returned doubled array

## Review Prompt

What is the practical difference between `nums + nums` and extending `nums` in
place for this problem?
