# Richest Customer Wealth

- LeetCode: https://leetcode.com/problems/richest-customer-wealth/
- Language: python3
- Exported at: 2026-06-05T14:09:43.179Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Matrix
- Memory: 19368000
- Submitted at: 2026-06-05T04:51:36.000Z
- Submission ID: 2022879816

## Pattern

Row-sum maximum.

## Key Idea

Each customer is one row of account balances. Sum each row and keep the largest row sum seen so far. The variable `c` is the current best wealth.

## Mistake / Edge Case

Initialize the best value low enough for the constraints; zero works here because balances are non-negative.

## Complexity

- Time: O(mn), total account entries
- Space: O(1)

## What Adrian Should Remember

For matrix rows with independent scores, reduce each row and track the best.
