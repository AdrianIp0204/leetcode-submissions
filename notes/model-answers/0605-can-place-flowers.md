# Can Place Flowers

- Pattern: greedy gap counting
- Original attempt: [submissions/0605-can-place-flowers](../../submissions/0605-can-place-flowers/)

## Model Solution

```python
class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        if n == 0:
            return True
        if 1 not in flowerbed:
            return (len(flowerbed) + 1) // 2 >= n
        res = 0
        c = 0
        seen = False
        for x in flowerbed:
            if x == 0:
                c += 1
            else:
                if not seen:
                    res += c // 2
                    seen = True
                else:
                    res += max(0, (c - 1) // 2)
                if res >= n:
                    return True
                c = 0
        res += c // 2
        return res >= n
```

## Why This Is The Model

The accepted solution avoids mutating the bed and calculates how many placements each zero run can support.

## Invariant or Proof Idea

After each planted `1` is processed, `res` is the total number of flowers that can be safely placed in all completed zero runs.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why does a middle gap of `c` zeros allow `(c - 1) // 2` flowers?
