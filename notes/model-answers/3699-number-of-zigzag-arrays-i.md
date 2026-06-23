# Number Of Zigzag Arrays I

- Pattern: dynamic programming with prefix sums
- Original attempt: [submissions/3699-number-of-zigzag-arrays-i](../../submissions/3699-number-of-zigzag-arrays-i/)

## Model Solution

```python
class Solution:
    def zigZagArrays(self, n: int, l: int, r: int) -> int:
        MOD = 1_000_000_007
        m = r - l + 1
        dp = [1] * m

        for _ in range(2, n + 1):
            dp.reverse()
            running = 0
            for j in range(m):
                dp[j], running = running, (running + dp[j]) % MOD

        return (sum(dp) * 2) % MOD
```

## Why This Is The Model

The accepted code counts one orientation of alternating comparisons and uses a
reverse plus prefix sum to switch direction at each new position. Each transition
needs the sum of states with a smaller valid previous value, and the prefix sum
computes all of those transitions in linear time per position.

## Invariant

After each length is processed, `dp[j]` stores the number of valid arrays of that
length ending at the `j`th value for the current comparison direction.

## Complexity

- Time: O(n * m), where `m = r - l + 1`
- Space: O(m)

## Review Prompt

How does reversing `dp` let the same prefix-sum loop handle the opposite
comparison direction?
