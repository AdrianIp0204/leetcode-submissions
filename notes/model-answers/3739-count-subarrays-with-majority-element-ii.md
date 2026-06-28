# Count Subarrays With Majority Element II

- Pattern: prefix balance / online frequency counting
- Original attempt: [submissions/3739-count-subarrays-with-majority-element-ii](../../submissions/3739-count-subarrays-with-majority-element-ii/)

## Model Solution

```python
class Solution:
    def countMajoritySubarrays(self, nums: List[int], target: int) -> int:
        n = len(nums)
        pref = n
        freq = [0] * (2 * n + 1)
        freq[pref] = 1

        previous_less = 0
        answer = 0

        for num in nums:
            if num == target:
                previous_less += freq[pref]
                pref += 1
            else:
                pref -= 1
                previous_less -= freq[pref]

            freq[pref] += 1
            answer += previous_less

        return answer
```

## Why This Is The Model

The submitted code uses the key transformation: `target` contributes `+1` and
every non-target value contributes `-1`. A subarray has more targets than
non-targets exactly when its balance is positive, so for each current prefix we
need the number of earlier prefix balances that are smaller.

## Invariant

Before adding to `answer`, `previous_less` is the count of prior prefix balances
strictly less than the current `pref`. Moving `pref` up by one adds the previous
old balance to that count; moving it down by one removes balances that are now
equal instead of smaller.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why does a strictly smaller previous prefix balance correspond to a positive
subarray balance?
