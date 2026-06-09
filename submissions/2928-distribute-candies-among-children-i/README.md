# Distribute Candies Among Children I

- LeetCode: https://leetcode.com/problems/distribute-candies-among-children-i/
- Language: python3
- Exported at: 2026-06-08T04:31:18.292Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math, Combinatorics, Enumeration
- Memory: 19328000
- Submitted at: 2026-06-08T03:23:50.000Z
- Submission ID: 2025860623

## Pattern

Inclusion-exclusion counting.

## Key Idea

Without upper limits, the number of nonnegative triples summing to `n` is a stars-and-bars count. Subtract assignments where one child exceeds the limit, add back assignments where two exceed it, and subtract where all three exceed it. The helper `ways` returns zero for impossible negative remainders.

## Mistake / Edge Case

Use `limit + 1` when excluding a child that has gone over the limit.

## Complexity

- Time: O(1)
- Space: O(1)

## What Adrian Should Remember

For bounded distribution counts, inclusion-exclusion can replace nested enumeration.
