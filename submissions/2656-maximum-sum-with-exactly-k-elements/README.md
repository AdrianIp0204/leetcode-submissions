# Maximum Sum With Exactly K Elements 

- LeetCode: https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/
- Language: python3
- Exported at: 2026-06-05T14:09:39.638Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Greedy
- Memory: 19148000
- Submitted at: 2026-06-05T12:55:23.000Z
- Submission ID: 2023286138

## Pattern

Arithmetic progression sum.

## Key Idea

The best first choice is the current maximum. Each operation increases that chosen value by one, so the selected values form `max, max+1, ..., max+k-1`. The formula sums that arithmetic progression directly.

## Mistake / Edge Case

The sequence has exactly `k` terms, ending at `max + k - 1`.

## Complexity

- Time: O(n), to find the maximum
- Space: O(1)

## What Adrian Should Remember

If repeated greedy choices form a simple sequence, sum the sequence instead of simulating it.
