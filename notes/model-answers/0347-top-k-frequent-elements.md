# Top K Frequent Elements

- Pattern: frequency map / bucket sort
- Original attempt: [submissions/0347-top-k-frequent-elements](../../submissions/0347-top-k-frequent-elements/)

## Model Solution

```python
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        counts = {}
        for num in nums:
            counts[num] = counts.get(num, 0) + 1

        buckets = [[] for _ in range(len(nums) + 1)]
        for num, freq in counts.items():
            buckets[freq].append(num)

        answer = []
        for freq in range(len(buckets) - 1, 0, -1):
            for num in buckets[freq]:
                answer.append(num)
                if len(answer) == k:
                    return answer

        return answer
```

## Why This Is The Model

Sorting the counted items is simple, but bucket sort uses the fact that a
frequency can only be between `1` and `len(nums)`. Walking the buckets from high
frequency to low frequency returns the top `k` without sorting all unique values.

## Invariant

`buckets[f]` contains exactly the values that occur `f` times. Scanning buckets
from right to left therefore visits values in non-increasing frequency order.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why is it enough to allocate `len(nums) + 1` buckets?
