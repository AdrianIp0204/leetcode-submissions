# Find if Digit Game Can Be Won

- LeetCode: https://leetcode.com/problems/find-if-digit-game-can-be-won/
- Language: python3
- Exported at: 2026-06-05T14:09:53.563Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Math
- Memory: 19172000
- Submitted at: 2026-06-04T06:57:41.000Z
- Submission ID: 2021997740

## Pattern

Partition by digit length.

## Key Idea

Separate one-digit numbers and two-digit numbers, sum each group, and compare the totals. Alice can win if one group sum is strictly larger than the other. The extra list `s` is unused for the final decision and could be removed.

## Mistake / Edge Case

Equal sums mean Alice cannot choose a strictly winning group.

## Complexity

- Time: O(n)
- Space: O(n), due to the temporary group lists

## What Adrian Should Remember

When only sums matter, separate running totals can replace storing whole groups.
