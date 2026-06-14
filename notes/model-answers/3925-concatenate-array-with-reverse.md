# Concatenate Array With Reverse

- Pattern: reversed copy construction
- Original attempt: [submissions/3925-concatenate-array-with-reverse](../../submissions/3925-concatenate-array-with-reverse/)

## Model Solution

```python
class Solution:
    def concatWithReverse(self, nums: List[int]) -> List[int]:
        return nums + nums[::-1]
```

## Why This Is The Model

The output is exactly the original array followed by a reversed copy. Slicing
with `[::-1]` expresses that second half without mutating the original list.

## Invariant

The first `n` elements of the answer match `nums`, and the last `n` elements
match `nums` read from right to left.

## Complexity

- Time: O(n)
- Space: O(n) for the returned array

## Review Prompt

Why would reversing `nums` in place before concatenation lose information?
