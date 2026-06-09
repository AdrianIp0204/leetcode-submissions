# Minimum Number Game

- LeetCode: https://leetcode.com/problems/minimum-number-game/
- Language: python3
- Exported at: 2026-06-02T11:30:21.785Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-05-28T06:27:27.000Z
- Submission ID: 2015194038

## Pattern

Sort and pair swap.

## Key Idea

Sort the numbers so the two smallest remaining values can be paired each round. The code sorts descending and pops from the end to retrieve the smallest values, then reverses each pair before appending. This simulates Alice and Bob picking two minimums and Bob's pick being placed before Alice's.

## Mistake / Edge Case

Each pair should be output in swapped order after selecting the two smallest numbers.

## Complexity

- Time: O(n log n)
- Space: O(n), for the output list

## What Adrian Should Remember

If repeated minimum extraction is needed, sorting once is simpler than searching each round.
