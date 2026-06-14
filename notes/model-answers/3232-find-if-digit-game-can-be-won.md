# Find if Digit Game Can Be Won

- Pattern: partition by digit length
- Original attempt: [submissions/3232-find-if-digit-game-can-be-won](../../submissions/3232-find-if-digit-game-can-be-won/)

## Model Solution

```python
class Solution:
    def canAliceWin(self, nums: List[int]) -> bool:
        one_digit = 0
        two_digit = 0

        for num in nums:
            if num < 10:
                one_digit += num
            else:
                two_digit += num

        return one_digit != two_digit
```

## Why This Is The Model

Alice can choose either all one-digit numbers or all two-digit numbers. She wins
exactly when one of those group sums is strictly larger than the other, so the
only state needed is the two running totals.

## Invariant

After scanning any prefix, `one_digit` and `two_digit` are the exact sums of the
numbers from that prefix in their respective digit-length groups.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why does checking `one_digit != two_digit` capture the existence of a strictly
winning choice?
