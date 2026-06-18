# Count Good Triplets

- Pattern: brute-force enumeration
- Original attempt: [submissions/1534-count-good-triplets](../../submissions/1534-count-good-triplets/)

## Model Solution

```python
class Solution:
    def countGoodTriplets(self, arr: List[int], a: int, b: int, c: int) -> int:
        ans = 0
        n = len(arr)

        for i in range(n - 2):
            for j in range(i + 1, n - 1):
                if abs(arr[i] - arr[j]) > a:
                    continue
                for k in range(j + 1, n):
                    if abs(arr[j] - arr[k]) <= b and abs(arr[i] - arr[k]) <= c:
                        ans += 1

        return ans
```

## Why This Is The Model

The constraints for this problem allow direct enumeration. Keeping the index
order in the loop bounds avoids any separate ordering checks.

## Invariant

Each loop level chooses the next index strictly to the right of the previous
one.

## Complexity

- Time: O(n^3)
- Space: O(1)

## Review Prompt

Which condition can be checked before entering the innermost loop?
