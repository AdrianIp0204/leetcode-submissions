# Bank Account Summary II

- LeetCode: https://leetcode.com/problems/bank-account-summary-ii/
- Language: txt
- Exported at: 2026-06-24T04:50:21.498Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Database
- Runtime: 306
- Memory: 68364000
- Submitted at: 2026-06-24T04:50:18.000Z
- Submission ID: 2044107242

## Pattern

Group aggregate, join, and threshold filter

## Key Idea

Sum each account's transaction amounts, join the balances back to users, keep
accounts above 10000, and return the required output column names.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: aggregate by account before filtering
so multiple transactions for one user are combined.

## Complexity

- Time: O(t + u) expected for grouping, joining, and filtering
- Space: O(t + u)
