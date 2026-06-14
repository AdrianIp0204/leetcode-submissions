# Number of Ways to Rearrange Sticks With K Sticks Visible

- LeetCode: https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/
- Language: python3
- Exported at: 2026-06-02T11:30:15.856Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-05-30T06:33:24.000Z
- Submission ID: 2016991681

## Pattern

Dynamic programming / combinatorics.

## Key Idea

Let `dp[i][j]` mean the number of arrangements of `i` sticks with exactly `j` visible sticks. When adding the tallest stick, it can be placed at the front and become visible, contributing `dp[i - 1][j - 1]`; or it can be placed behind one of the `i - 1` existing positions and not increase the visible count, contributing `(i - 1) * dp[i - 1][j]`. The modulo keeps the numbers bounded.

## Mistake / Edge Case

The return statement uses `dp[i][j]`, which works only because the loops finish with `i == n` and `j == k`. Returning `dp[n][k]` would say the intent more clearly.

## Complexity

- Time: O(nk)
- Space: O(nk)

## What Adrian Should Remember

For DP counting, define the state in one precise sentence before trusting the recurrence.
