# Move Zeroes

- Pattern: two pointers / stable compaction
- Original attempt: [submissions/0283-move-zeroes](../../submissions/0283-move-zeroes/)

## Model Solution

```python
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        write = 0

        for read in range(len(nums)):
            if nums[read] != 0:
                nums[write] = nums[read]
                write += 1

        for i in range(write, len(nums)):
            nums[i] = 0
```

## Why This Is The Model

Removing while iterating is fragile and can become O(n^2). The model answer
keeps the relative order of nonzero values by writing them forward once, then
fills the remaining suffix with zeroes.

## Invariant

After each read step, `nums[:write]` contains the nonzero values seen so far in
their original order.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why is this stable even though it overwrites entries in `nums`?
