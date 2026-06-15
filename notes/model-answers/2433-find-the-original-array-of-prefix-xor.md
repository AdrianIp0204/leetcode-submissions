# Find The Original Array of Prefix Xor

- Pattern: prefix XOR inversion
- Original attempt: [submissions/2433-find-the-original-array-of-prefix-xor](../../submissions/2433-find-the-original-array-of-prefix-xor/)

## Model Solution

```python
class Solution:
    def findArray(self, pref: List[int]) -> List[int]:
        prev_prefix = 0
        for i in range(len(pref)):
            original = prev_prefix ^ pref[i]
            pref[i] = original
            prev_prefix ^= original
        return pref
```

## Why This Is The Model

The accepted solution uses the fact that XORing the previous prefix with the current prefix recovers the current original value.

## Invariant or Proof Idea

Before index `i`, `prev_prefix` equals the XOR of all restored values before `i`; therefore `prev_prefix ^ pref[i]` cancels the old prefix and leaves `arr[i]`.

## Complexity

- Time: O(n)
- Space: O(1) extra

## Review Prompt

Why is it safe to overwrite `pref[i]` after computing the original value?
