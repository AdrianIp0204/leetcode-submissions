# Sum of All Odd Length Subarrays

- Pattern: contribution counting
- Original attempt: [submissions/1588-sum-of-all-odd-length-subarrays](../../submissions/1588-sum-of-all-odd-length-subarrays/)

## Model Solution

```python
class Solution:
    def sumOddLengthSubarrays(self, arr: List[int]) -> int:
        n = len(arr)
        total = 0

        for i, value in enumerate(arr):
            starts = i + 1
            ends = n - i
            subarrays_containing_i = starts * ends
            odd_length_count = (subarrays_containing_i + 1) // 2
            total += value * odd_length_count

        return total
```

## Why This Is The Model

Instead of enumerating every odd-length subarray, count how many valid subarrays
include each element. There are `(i + 1) * (n - i)` subarrays containing
`arr[i]`, and half of them rounded up have odd length, so each element's
contribution can be added directly.

## Invariant

After index `i` is processed, `total` includes the full contribution of every
element from `arr[0]` through `arr[i]` across all odd-length subarrays.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

How do the choices of start index and end index determine how many subarrays
contain `arr[i]`?
