# Longest Consecutive Sequence

- Pattern: hash set / sequence starts
- Original attempt: [submissions/0128-longest-consecutive-sequence](../../submissions/0128-longest-consecutive-sequence/)

## Model Solution

```python
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        values = set(nums)
        best = 0

        for num in values:
            if num - 1 in values:
                continue

            length = 1
            while num + length in values:
                length += 1

            best = max(best, length)

        return best
```

## Why This Is The Model

Sorting is a good baseline, but the problem asks for O(n). The set version only
starts counting from the beginning of each run, where `num - 1` is missing. That
means every number is advanced through at most once across all while loops.

## Invariant

If `num - 1` is present, `num` is not the start of a sequence and should be
ignored. Every counted run begins at its unique smallest value.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why would the algorithm become slower if it started a while loop from every
number instead of only from sequence starts?
