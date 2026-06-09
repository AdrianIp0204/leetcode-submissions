# Partition Array According to Given Pivot

- LeetCode: https://leetcode.com/problems/partition-array-according-to-given-pivot/
- Language: python3
- Exported at: 2026-06-08T04:31:18.924Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Array, Two Pointers, Simulation
- Runtime: 36
- Memory: 33808000
- Submitted at: 2026-06-08T02:31:28.000Z
- Submission ID: 2025835067

## Pattern

Stable three-way partition.

## Key Idea

Build separate lists for values smaller than, equal to, and greater than the pivot while scanning left to right. Concatenating those lists preserves relative order within each group. This matches the stable partition requirement directly.

## Mistake / Edge Case

All pivot-equal values belong in the middle group, not just one pivot instance.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

When stability matters, append to buckets in scan order and concatenate them.
