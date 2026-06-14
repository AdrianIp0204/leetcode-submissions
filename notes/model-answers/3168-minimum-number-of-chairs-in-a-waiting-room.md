# Minimum Number of Chairs in a Waiting Room

- Pattern: running occupancy maximum
- Original attempt: [submissions/3168-minimum-number-of-chairs-in-a-waiting-room](../../submissions/3168-minimum-number-of-chairs-in-a-waiting-room/)

## Model Solution

```python
class Solution:
    def minimumChairs(self, s: str) -> int:
        res, current = 0, 0
        for i in s:
            current += 1 if i == "E" else -1
            if current > res:
                res = current
        return res
```

## Why This Is The Model

The accepted solution is the standard sweep over entry/exit events with a peak counter.

## Invariant or Proof Idea

After each event, `current` is the current occupied chair count and `res` is the maximum count seen so far.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why does the peak occupancy equal the minimum number of chairs needed?
