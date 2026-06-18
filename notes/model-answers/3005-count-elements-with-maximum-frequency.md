# Count Elements With Maximum Frequency

- Pattern: frequency counting
- Original attempt: [submissions/3005-count-elements-with-maximum-frequency](../../submissions/3005-count-elements-with-maximum-frequency/)

## Model Solution

```python
class Solution:
    def maxFrequencyElements(self, nums: List[int]) -> int:
        counts = Counter(nums)
        max_freq = max(counts.values())
        return sum(freq for freq in counts.values() if freq == max_freq)
```

## Why This Is The Model

The answer is the total number of elements whose value belongs to a maximum
frequency bucket, so summing the matching frequencies is the key step.

## Invariant

After counting, each frequency contributes to the answer exactly when it equals
the global maximum.

## Complexity

- Time: O(n)
- Space: O(k)

## Review Prompt

Why is the answer not just the number of keys with maximum frequency?
