# Number of Ways to Rearrange Sticks With K Sticks Visible

- Pattern: dynamic programming / combinatorics
- Original attempt: [submissions/1866-number-of-ways-to-rearrange-sticks-with-k-sticks-visible](../../submissions/1866-number-of-ways-to-rearrange-sticks-with-k-sticks-visible/)

## Model Solution

```python
class Solution:
    def rearrangeSticks(self, n: int, k: int) -> int:
        mod = 10**9 + 7
        dp = [0] * (k + 1)
        dp[0] = 1

        for sticks in range(1, n + 1):
            next_dp = [0] * (k + 1)
            for visible in range(1, min(sticks, k) + 1):
                show_tallest = dp[visible - 1]
                hide_tallest = dp[visible] * (sticks - 1)
                next_dp[visible] = (show_tallest + hide_tallest) % mod
            dp = next_dp

        return dp[k]
```

## Why This Is The Model

Let `dp[v]` represent the previous row: arrangements of the smaller sticks with
`v` visible sticks. When adding the new tallest stick, putting it at the front
makes it visible, while putting it in any of the other `sticks - 1` positions
does not change the visible count.

This is the same recurrence as the 2D table, but it keeps only the previous row.

## Invariant

After processing `sticks`, `dp[visible]` is the number of arrangements of
`sticks` sticks with exactly `visible` visible sticks.

## Complexity

- Time: O(n * k)
- Space: O(k)

## Review Prompt

Why are there exactly `sticks - 1` positions where the new tallest stick is not
visible?
