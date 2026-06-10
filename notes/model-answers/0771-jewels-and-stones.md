# Jewels and Stones

- Pattern: set membership counting
- Original attempt: [submissions/0771-jewels-and-stones](../../submissions/0771-jewels-and-stones/)

## Model Solution

```python
class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        jewel_set = set(jewels)
        count = 0

        for stone in stones:
            if stone in jewel_set:
                count += 1

        return count
```

## Why This Is The Model

The jewel characters are fixed, so converting them once to a set makes each
stone check constant time. The loop then directly counts stones whose character
is a jewel, preserving case sensitivity.

## Invariant

After scanning each stone, `count` equals the number of jewel stones in the
prefix processed so far.

## Complexity

- Time: O(j + s), where `j` is `len(jewels)` and `s` is `len(stones)`
- Space: O(j)

## Review Prompt

What changes in the complexity when `jewels` is left as a string instead of
converted to a set?
