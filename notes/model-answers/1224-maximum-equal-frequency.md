# Maximum Equal Frequency

- Pattern: frequency of frequencies
- Original attempt: [submissions/1224-maximum-equal-frequency](../../submissions/1224-maximum-equal-frequency/)

## Model Solution

```python
from collections import defaultdict


class Solution:
    def maxEqualFreq(self, nums: List[int]) -> int:
        count = defaultdict(int)
        freq_count = defaultdict(int)
        max_freq = 0
        answer = 0

        for length, num in enumerate(nums, 1):
            old = count[num]
            if old:
                freq_count[old] -= 1

            count[num] += 1
            new = count[num]
            freq_count[new] += 1
            max_freq = max(max_freq, new)

            all_once = max_freq == 1
            one_singleton = freq_count[1] == 1 and freq_count[max_freq] * max_freq + 1 == length
            one_too_large = (
                freq_count[max_freq] == 1
                and freq_count[max_freq - 1] * (max_freq - 1) + max_freq == length
            )

            if all_once or one_singleton or one_too_large:
                answer = length

        return answer
```

## Why This Is The Model

The hard part is not counting values; it is counting how many values have each
count. A prefix is valid after deleting one element only in three cases:
everything appears once, one value appears once and the rest share `max_freq`,
or one value appears `max_freq` times and the rest share `max_freq - 1`.

## Invariant

At each prefix length, `count[x]` is the frequency of value `x`, and
`freq_count[f]` is how many values currently have frequency `f`. The three
validity checks describe every way one deletion can make all remaining
frequencies equal.

## Complexity

- Time: O(n)
- Space: O(u), where `u` is the number of distinct values

## Review Prompt

Why do we need `freq_count` instead of only tracking `count` and `max_freq`?
