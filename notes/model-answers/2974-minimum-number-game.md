# Minimum Number Game

- Pattern: sort and pair swap
- Original attempt: [submissions/2974-minimum-number-game](../../submissions/2974-minimum-number-game/)

## Model Solution

```python
class Solution:
    def numberGame(self, nums: List[int]) -> List[int]:
        nums.sort()
        result = []

        for i in range(0, len(nums), 2):
            result.extend([nums[i + 1], nums[i]])

        return result
```

## Why This Is The Model

Sorting exposes the two smallest remaining values at each step. Alice removes
the smaller one first, Bob removes the next one, and Bob's value is appended
before Alice's value, so each sorted pair is emitted in swapped order.

## Invariant

Before each loop iteration, all earlier numbers have been consumed in pairs and
`result` contains those pairs in the required Bob-before-Alice order.

## Complexity

- Time: O(n log n)
- Space: O(n), for the output list

## Review Prompt

After sorting, why is swapping each adjacent pair enough to simulate the game?
